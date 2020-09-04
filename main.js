// Amazon shopping
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}

// quick array of objects
const items = [
  {name: 'Cheese', price: 7},
  {name: 'Peanuts', price: 3},
  {name: 'Fan', price: 25}
]

//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
const addItemToCart = (item) => {
  const priceWithTax = item.price * 1.03;
  item.price = priceWithTax;
  user.cart.push(item);
  return user.cart;
  
} 

// 3. Buy item: cart --> purchases
// 4. Empty cart
const purchaseItemsInCart = (user) => {
  user.purchases = user.cart;
  user.cart = [];
  return user.purchases;
}


//Bonus:
// accept refunds.
// Track user history.
addItemToCart(items[0]);
purchaseItemsInCart(user);
console.log(user)
