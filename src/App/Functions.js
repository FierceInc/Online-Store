/* eslint-disable array-callback-return */
// Adds Items to the wishlist while updating the store
export const addItemsToWishlist = (
  wishlistInventory,
  id,
  dispatchFunc,
  addToWishlistFunc,
  removeWishListFunc,
  sneaker
) => {
  if (!wishlistInventory.find((s) => s.id === id)) {
    return dispatchFunc(addToWishlistFunc(sneaker));
  }
  return dispatchFunc(removeWishListFunc(id));
};
// Adds Items to the cart while updating the store
export const addItemsToCart = (
  cartInventory,
  id,
  dispatchFunc,
  addToCartFunc,
  removeCartFunc,
  sneaker
) => {
  if (!cartInventory.find((s) => s.id === id)) {
    return dispatchFunc(addToCartFunc(sneaker));
  }
  return dispatchFunc(removeCartFunc(id)); 
};

// Collect all the prices of products in the cart and add them together to get the total
export const TotaltPrice = (price, n = 0) => {
  return (
    "R " +
    (price.reduce((a, b) => a + b, 0) + n)
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") //Format the price as money
  );
};
// Display the price of the product multiplied by the number of products
export const productPrice = (price, quantity=1) => {
  return (
    "R " +
    (price * quantity)
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") //Format the price as money
  );
};

//BELOW v update the quantity of the selected product
export const increaseQuantity = (
  dispatchFunc,
  updateQuantityFunc,
  quantity,
  id
) => {
  if (quantity >= 1) {
    dispatchFunc(updateQuantityFunc({ id: id, quantity: quantity + 1 }));
  }
};

export const decreaseQuantity = (
  dispatchFunc,
  updateQuantityFunc,
  quantity,
  id
) => {
  if (quantity > 1) {
    dispatchFunc(updateQuantityFunc({ id: id, quantity: quantity - 1 }));
  }
};
// ABOVE ^update the quantity of the selected product

// Check for Item in Cart or Wishlist

export const checkItems = (inWishlist, inCart, id) => {
  if (inWishlist.find((s) => s.id === id) || inCart.find((s) => s.id === id))
    return true;
};

// Move all wishlist items to the cart

export const addAllToCart = (
  Inventory,
  Cart,
  dispatchFunc,
  addToCartFunc,
  getSneakerFunc,
  removeWishListFunc
) => {
  // Extract and compare all the ids from the wishlist and cart
  const WishId = Inventory.map(product=> product.id);
  const CartId = Cart.map(product => product.id);
  let idList = [];
  // Checks if the items in the wish list already exist in the cart.
  WishId.forEach(product => {
    if (!CartId.includes(product)) {
      idList.push(product);
    }
  });

  if (idList) {
  // Move all items into the cart except the ones that already exist
    idList.map((id) => dispatchFunc(addToCartFunc(getSneakerFunc(id))));

    // After all items are moved to the cart remove them from the wishlist
    idList.map((id) => dispatchFunc(removeWishListFunc(id)));
  }
};
