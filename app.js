// Add an event listener to the "Add to Cart" buttons
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', event => {
      // Get the product element that the button belongs to
      const product = event.target.parentElement;
      // Get the name and price of the product
      const name = product.querySelector('h3').textContent;
      const price = product.querySelector('p').textContent;
      // Add the product to the shopping cart
      addToCart(name, price);
    });
  });
  
  // Add a product to the shopping cart
  function addToCart(name, price) {
    // Check if the shopping cart already exists
    let cart = localStorage.getItem('cart');
    if (cart === null) {
      // If the shopping cart doesn't exist, create it
      cart = [];
    } else {
      // If the shopping cart exists, convert it back to a JavaScript object
      cart = JSON.parse(cart);
    }
  
    // Add the new product to the shopping cart
    cart.push({ name: name, price: price });
  
    // Save the updated shopping cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Display the number of items in the shopping cart in the navbar
  function updateCartCount() {
    // Get the shopping cart from local storage
    let cart = localStorage.getItem('cart');
    if (cart === null) {
      // If the shopping cart is empty, set the count to 0
      document.querySelector('#cart-count').textContent = '0';
    } else {
      // If the shopping cart is not empty, convert it back to a JavaScript object
      cart = JSON.parse(cart);
      // Set the count to the number of items in the shopping cart
      document.querySelector('#cart-count').textContent = cart.length;
    }
  }
  
  // Update the cart count when the page loads
  updateCartCount();
  