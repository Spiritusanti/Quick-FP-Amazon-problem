// // Amazon shopping
// const user = {
//   name: 'Kim',
//   active: true,
//   cart: [],
//   purchases: []
// }

// // quick array of objects
// const items = [
//   {name: 'Cheese', price: 7},
//   {name: 'Peanuts', price: 3},
//   {name: 'Fan', price: 25}
// ]

// //Implement a cart feature:
// // 1. Add items to cart.
// // 2. Add 3% tax to item in cart
// const addItemToCart = (item) => {
//   const priceWithTax = item.price * 1.03;
//   item.price = priceWithTax;
//   user.cart.push(item);
//   return user.cart;
  
// } 

// // 3. Buy item: cart --> purchases
// // 4. Empty cart
// const purchaseItemsInCart = (user) => {
//   user.purchases = user.cart;
//   user.cart = [];
//   return user.purchases;
// }


//Bonus:
// accept refunds.
// Track user history.
// addItemToCart(items[0]);
// purchaseItemsInCart(user);
// console.log(user)


// Andrei's solution:
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}

let amazonHistory = []
const compose = (f, g) => (...args) => f(g(...args));
// what we want to do:
purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItem,
  addItemToCart
)(user, {name: "laptop", price: 200})

function purchaseItem(...fns) {
  return fns.reduce(compose)
}

function addItemToCart(user, item) {
  amazonHistory.push(user)
  const updateCart = user.cart.concat(item)
  return Object.assign({}, user, { cart: updateCart })
}

function applyTaxToItem(user) {
  amazonHistory.push(user)
  const {cart} = user;
  const taxRate = 1.03;
  const updatedCart = cart.map(item => {
    return {
      name: item.name,
      price: item.price*taxRate
    }
  })
  return Object.assign({}, user, { cart: updatedCart})
}

function buyItem(user) {
  amazonHistory.push(user)
  return Object.assign({}, user, { purchases: user.cart})
}

function emptyCart(user) {
  amazonHistory.push(user)
  return Object.assign({}, user, { cart: []})
}

amazonHistory
