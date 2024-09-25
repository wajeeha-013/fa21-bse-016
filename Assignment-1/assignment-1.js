// Shopping Cart Array
let cart = [];

// Add an item to the cart
const addItemToCart = (productId, productName, quantity, price) => {
  cart.push({ productId, productName, quantity, price });
  console.log(`${productName} added to the cart.`);
};
// 'addItemToCart' is a function to add a product to the cart.
// The function takes in product details (productId, productName, quantity, price).
// The product is added to the cart array using 'push', which appends the product object to the cart.
// It logs a message confirming that the product has been added.



// Remove an item from the cart
const removeItemFromCart = productId => {
  cart = cart.filter(product => product.productId !== productId);
  console.log(`Item with ID ${productId} removed from the cart.`);
};
// 'removeItemFromCart' removes a product from the cart by filtering out the product with the specified productId.
// 'filter' returns a new array containing all items except the one with the matching productId.
// It logs a message that the product has been removed.


// Update the quantity of an item
const updateitem=(productid, newQuantity)=>
  {
    cart = cart.find(product => product.productId !== productId);
    if (product) {
      product.quantity = newQuantity;
      console.log(`Quantity for product ID ${productId} updated to ${newQuantity}.`);
    } else {
      console.log(`Product with ID ${productId} not found in the cart.`);
    }    }
// 'updateitem' updates the quantity of a product in the cart.
// It finds the product in the cart using 'find' method.
// If the product is found, it updates the 'quantity' and logs a confirmation message.
// If not found, it logs that the product was not in the cart.





// Calculate total cost
const calculateTotalCost = () =>
  cart.reduce((total, { price, quantity }) => total + price * quantity, 0);
// 'calculateTotalCost' calculates the total price of all items in the cart.
// It uses 'reduce' to sum up the total by multiplying the 'price' by 'quantity' for each product.
// The total starts from 0, and for each item in the cart, it adds the item’s total price to the overall total.





// Display cart summary
const displayCartSummary = () => {
  cart.forEach(({ productName, quantity, price }) =>
    console.log(`${productName}: ${quantity} x ${price} = ${quantity * price}`)
  );
};
// 'displayCartSummary' logs a summary of each product in the cart.
// 'forEach' iterates through each product in the cart and logs the product name, quantity, price per item, and total cost for that product.



// Filter out items with zero quantity
const filterZeroQuantityItems = () => {
  cart = cart.filter(product => product.quantity > 0);
  console.log("Items with zero quantity removed.");
};
// 'filterZeroQuantityItems' removes any items in the cart that have a quantity of 0.
// It uses 'filter' to create a new cart array that only contains products with a quantity greater than 0.
// Logs a message after removing the items.



// Apply discount
const applyDiscount = code => {
  let discount = 0;
  if (code === 'DISCOUNT10') discount = 0.1;
  if (code === 'DISCOUNT20') discount = 0.2;
  // 'applyDiscount' checks the discount code. If 'DISCOUNT10' is applied, it gives a 10% discount. If 'DISCOUNT20' is applied, it gives a 20% discount.
  
  const totalCost = calculateTotalCost();
  // Calls 'calculateTotalCost' to get the current total before discount.

  const discountedTotal = totalCost - (totalCost * discount);
  // Calculates the discounted total by subtracting the discount amount from the total cost.

  console.log(`Total after discount: ${discountedTotal}`);
  // Logs the total cost after applying the discount.
};


// Example Usage
addItemToCart(1, 'Shampoo', 2, 200);
addItemToCart(2, 'Soap', 3, 50);

displayCartSummary();
console.log(`Total: ${calculateTotalCost()}`);

applyDiscount('DISCOUNT10');
removeItemFromCart(1);
filterZeroQuantityItems();
displayCartSummary();


  

