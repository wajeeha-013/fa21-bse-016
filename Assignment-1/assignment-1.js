// Shopping Cart Array
let cart = [];

// Add an item to the cart
const addItemToCart = (productId, productName, quantity, price) => {
  cart.push({ productId, productName, quantity, price });
  console.log(`${productName} added to the cart.`);
};

// Remove an item from the cart
const removeItemFromCart = productId => {
  cart = cart.filter(product => product.productId !== productId);
  console.log(`Item with ID ${productId} removed from the cart.`);
};

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

// Calculate total cost
const calculateTotalCost = () =>
  cart.reduce((total, { price, quantity }) => total + price * quantity, 0);

// Display cart summary
const displayCartSummary = () => {
  cart.forEach(({ productName, quantity, price }) =>
    console.log(`${productName}: ${quantity} x ${price} = ${quantity * price}`)
  );
};

// Filter out items with zero quantity
const filterZeroQuantityItems = () => {
  cart = cart.filter(product => product.quantity > 0);
  console.log("Items with zero quantity removed.");
};

// Apply discount
const applyDiscount = code => {
  let discount = 0;
  if (code === 'DISCOUNT10') discount = 0.1;
  if (code === 'DISCOUNT20') discount = 0.2;

  const totalCost = calculateTotalCost();
  const discountedTotal = totalCost - (totalCost * discount);
  console.log(`Total after discount: ${discountedTotal}`);
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


  

