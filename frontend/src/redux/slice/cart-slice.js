import { v4 as uuidv4 } from 'uuid';
import cogoToast from 'cogo-toast';
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            const { _id, selectedProductColor, selectedProductSize, quantity = 1 } = product;

            if (!product.variants || product.variants.length === 0) {
                const cartItem = state.cartItems.find(item => item._id === _id);

                if (!cartItem) {
                    state.cartItems.push({
                        ...product,
                        quantity,
                        cartItemId: uuidv4()
                    });
                } else {
                    state.cartItems = state.cartItems.map(item =>
                        item.cartItemId === cartItem.cartItemId
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    );
                }
            } else {
                const cartItem = state.cartItems.find(item =>
                    item._id === _id &&
                    (!selectedProductColor || selectedProductColor === item.selectedProductColor) &&
                    (!selectedProductSize || selectedProductSize === item.selectedProductSize)
                );

                if (!cartItem) {
                    state.cartItems.push({
                        ...product,
                        quantity,
                        cartItemId: uuidv4()
                    });
                } else {
                    state.cartItems = state.cartItems.map(item =>
                        item.cartItemId === cartItem.cartItemId
                            ? { 
                                ...item, 
                                quantity: item.quantity + quantity,
                                selectedProductColor,
                                selectedProductSize 
                              }
                            : item
                    );
                }
            }

            cogoToast.success("Added To Cart", { position: "bottom-left" });
        },
        deleteFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.cartItemId !== action.payload);
            cogoToast.error("Removed From Cart", { position: "bottom-left" });
        },
        decreaseQuantity(state, action) {
            const product = action.payload;
            const cartItem = state.cartItems.find(item => item.cartItemId === product.cartItemId);

            if (cartItem) {
                if (cartItem.quantity === 1) {
                    state.cartItems = state.cartItems.filter(item => item.cartItemId !== product.cartItemId);
                    cogoToast.error("Removed From Cart", { position: "bottom-left" });
                } else {
                    state.cartItems = state.cartItems.map(item =>
                        item.cartItemId === product.cartItemId
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    );
                    cogoToast.warn("Item Decremented From Cart", { position: "bottom-left" });
                }
            }
        },
        deleteAllFromCart(state) {
            state.cartItems = [];
        }
    }
});

export const { addToCart, deleteFromCart, decreaseQuantity, deleteAllFromCart } = cartSlice.actions;


export const cartReducer = cartSlice.reducer;
