import { v4 as uuidv4 } from "uuid";
import cogoToast from "cogo-toast";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      if (!product.variants || product.variants.length === 0) {
        const cartItem = state.cartItems.find(
          (item) => item._id === product._id
        );
        if (!cartItem) {
          if (product.quantity > 0) {
            state.cartItems.push({
              ...product,
              cartQuantity: 1,
              quantity: product.quantity - 1,
              cartItemId: uuidv4(),
            });
          } else {
            cogoToast.error("Out of Stock", { position: "bottom-left" });
          }
        } else {
          if (cartItem.quantity > 0) {
            state.cartItems = state.cartItems.map((item) => {
              if (item.cartItemId === cartItem.cartItemId) {
                return {
                  ...item,
                  cartQuantity: item.cartQuantity + 1,
                  quantity: item.quantity - 1,
                };
              }
              return item;
            });
          } else {
            cogoToast.error("Out of Stock", { position: "bottom-left" });
          }
        }
      } else {
        const cartItem = state.cartItems.find(
          (item) =>
            item._id === product._id &&
            product.selectedVariantSku &&
            product.selectedVariantSku === item.selectedVariantSku &&
            (product.cartItemId ? product.cartItemId === item.cartItemId : true)
        );
        if (!cartItem) {
          if (product.quantity > 0) {
            state.cartItems.push({
              ...product,
              cartQuantity: 1,
              quantity: product.quantity - 1,
              cartItemId: uuidv4(),
            });
          } else {
            cogoToast.error("Out of Stock", { position: "bottom-left" });
          }
        } else if (
          cartItem !== undefined &&
          cartItem.selectedVariantSku !== product.selectedVariantSku
        ) {
          if (product.quantity > 0) {
            state.cartItems = [
              ...state.cartItems,
              {
                ...product,
                cartQuantity: 1,
                quantity: product.quantity - 1,
                cartItemId: uuidv4(),
              },
            ];
          } else {
            cogoToast.error("Out of Stock", { position: "bottom-left" });
          }
        } else {
          if (cartItem.quantity > 0) {
            state.cartItems = state.cartItems.map((item) => {
              if (item.cartItemId === cartItem.cartItemId) {
                return {
                  ...item,
                  cartQuantity: item.cartQuantity + 1,
                  quantity: item.quantity - 1,
                  selectedVariantSku: product.selectedVariantSku,
                };
              }
              return item;
            });
          } else {
            cogoToast.error("Out of Stock", { position: "bottom-left" });
          }
        }
      }

      cogoToast.success("Added To Cart", { position: "bottom-left" });
    },
    deleteFromCart(state, action) {
      const cartItemId = action.payload;
      const cartItem = state.cartItems.find(
        (item) => item.cartItemId === cartItemId
      );

      if (cartItem) {
        state.cartItems = state.cartItems.filter(
          (item) => item.cartItemId !== cartItemId
        );
        cogoToast.error("Removed From Cart", { position: "bottom-left" });
      }
    },
    increaseQuantity(state, action) {
      const cartItem = action.payload;
      const cartItemId = cartItem.cartItemId;
      console.log(cartItem, cartItemId);
      if (cartItem) {
        if (cartItem.quantity <=0) {
          
          cogoToast.error("Stock limit reached", { position: "bottom-left" });
        } else {
          state.cartItems = state.cartItems.map((item) =>
            item.cartItemId === cartItemId
              ? {
                  ...item,
                  cartQuantity: item.cartQuantity + 1,
                  quantity: item.quantity - 1,
                }
              : item
          );
          cogoToast.success("Item Incremented in Cart", {
            position: "bottom-left",
          });
        }
      }
    },
    decreaseQuantity(state, action) {
      const cartItem = action.payload;
      const cartItemId = cartItem.cartItemId;

      if (cartItem) {
        if (cartItem.cartQuantity === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.cartItemId !== cartItemId
          );
          cogoToast.error("Removed From Cart", { position: "bottom-left" });
        } else {
          state.cartItems = state.cartItems.map((item) =>
            item.cartItemId === cartItemId
              ? {
                  ...item,
                  cartQuantity: item.cartQuantity - 1,
                  quantity: item.quantity + 1,
                }
              : item
          );
          cogoToast.warn("Item Decremented From Cart", {
            position: "bottom-left",
          });
        }
      }
    },
    deleteAllFromCart(state) {
      state.cartItems = [];
      cogoToast.warn("All Items Removed From Cart", {
        position: "bottom-left",
      });
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
  deleteAllFromCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
