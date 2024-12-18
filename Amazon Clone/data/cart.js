export const cart = [];

export function addTocart(productId, productQuantity) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += productQuantity;
  }
  else {
    cart.push({
      productId: productId,
      quantity: productQuantity
    });
  }
}

