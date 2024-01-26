// eslint-disable-next-line no-unused-vars
import React from 'react';
import propTypes from "prop-types";
import "./Product list.css";

// Function to scroll to the top of the page with a smooth animation
const ScrollUp = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page with smooth animation
};

// Product component definition with a functional approach
const Product = ({ image, name, Price, addToCart, removeFromCart, isInCart }) => {
  const handleAddToCart = () => {
    addToCart(name);
    ScrollUp(); // Call the ScrollUp function after adding to the cart
  };

  // JSX code for rendering the Product component
  return (
    <div className="product">
      <img src={image} alt={name}/>
      <h3>{name}</h3>
      {name === 'Special Item' || name === 'Popular Item' ? (
        <div className="star-icons">★★★★★</div>
      ) : (
        ''
      )}
      <p>{Price}
        </p>
      {isInCart ? (
        <button onClick={() => removeFromCart(name)}>Remove from Cart</button>
      ) : (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
    </div>
  );
};

// Prop type validation for the props used in the Product component
Product.propTypes = {
  image: propTypes.string,
  name: propTypes.string,
  Price: propTypes.number,
  addToCart: propTypes.func,
  removeFromCart: propTypes.func,
  isInCart: propTypes.bool,
};

// Exporting the Product component
export default Product;