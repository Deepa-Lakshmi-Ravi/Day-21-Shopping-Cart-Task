import { useState } from 'react';
import Product from './Product list';
import "./App.css";
import ShoppingCart from './Cart Item';
  const initialProducts = [
    // Sample product data
    { image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",name: 'Fancy Product', Price: '$40.00-$80.00' },
    { image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",name: 'Special Item', Price: '$18.00' },
    { image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",name: 'Sale Item', Price: '$25.00' },
    { image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",name: 'Popular Item', Price: '$40.00' },
    { image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",name: 'Sale Item', Price: '$25.00' },
    { image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",name: 'Special Item', Price: '$18.00' },
    { image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",name: 'Fancy Product', Price: '$120.00-$280.00' },
    { image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",name: 'Popular Item', Price: '$40.00' },
    
  ];

  // Main App component
  const App = () =>{
// State hooks for managing products and cart items
  const [products, setProducts] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);
// Function to add a product to the cart
  const addToCart = (productname) => {
    const selectedProduct = products.find((product) => product.name === productname);
    setCartItems([...cartItems, selectedProduct]);
    setProducts(products.map((product) => (product.name === productname ? { ...product, isInCart: true } : product)));
  };
// Function to remove a product from the cart
  const removeFromCart = (productname) => {
    setCartItems(cartItems.filter((item) => item.name !== productname));
    setProducts(products.map((product) => (product.name === productname ? { ...product, isInCart: false } : product)));
  };


// JSX code for rendering the App component
  return (
    <div className="app">
      <nav className='navbar'>
      <div className='header'>
        <a href='#!'>Start Bootstrap</a>
        <div className='nav-list'>
        <ul>
          <li>
            <a href='#!'>Home</a>
          </li>
          <li>
            <a href='#!'>About</a>
          </li>
          <li>
            <a href='#!'>Shop</a>
          </li>
        </ul>
        <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
        </div> 
      </nav>
      <div className='heading'>
      <h1>Shopping Page</h1><br/>
      <p>With this shop hompeage template</p>
      </div>
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.name}
            {...product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            isInCart={cartItems.some((item) => item.name === product.name)}
          />
        ))}
      </div>
      <footer>Copyright © Your Website 2023</footer>
    </div>
  );
};
  
// Exporting the App component
export default App;