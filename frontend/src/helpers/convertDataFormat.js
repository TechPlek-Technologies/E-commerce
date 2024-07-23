export function convertProductData(input) {
    const baseProduct = {
      id: input._id,
      sku: input.productId,
      name: input.name,
      price: input.price,
      discount: input.discountPercentage,
      new: input.new,
      rating: 0, // Assuming there's no corresponding field in the input data
      saleCount: 0, // Assuming there's no corresponding field in the input data
      category: input.categories,
      tag: [], // Assuming there's no corresponding field in the input data
      image: input.image.map(img => img.url).concat(input.gallery.map(img => img.url)),
      shortDescription: input.shortDescription,
      fullDescription: input.description
    };
  
    if (input.type === "variable") {
      // Map the attributes to variation format
      const variations = input.variants.map(variant => ({
        color: variant.color || "default",
        image: input.image[variant.imageIndex] ? input.image[variant.imageIndex].url : "",
        size: [
          {
            name: variant.attr,
            stock: parseInt(variant.qty, 10)
          }
        ]
      }));
  
      // Ensure each color has its own entry with sizes
      const groupedVariations = variations.reduce((acc, variation) => {
        const existingVariation = acc.find(v => v.color === variation.color && v.image === variation.image);
        if (existingVariation) {
          existingVariation.size.push(...variation.size);
        } else {
          acc.push(variation);
        }
        return acc;
      }, []);
  
      return {
        ...baseProduct,
        variation: groupedVariations
      };
    } else {
      // Assuming `stock` is a sum of all variant quantities in a simple product
      const stock = input.variants.reduce((total, variant) => total + parseInt(variant.qty, 10), 0);
  
      return {
        ...baseProduct,
        stock
      };
    }
  }