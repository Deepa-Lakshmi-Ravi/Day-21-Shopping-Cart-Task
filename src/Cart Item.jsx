// Importing prop-types library for defining prop types
import propTypes from "prop-types";
// Importing the CSS file for styling
import "./CartItem.css";

const ShoppingCart = ({ cartItems}) => (
  <div className="shopping-cart">
     <i className="fa-solid fa-cart-shopping"></i>Cart 
      <span className="ItemLen">{cartItems.length} </span>
  </div>

);
// Prop type validation for the 'cartItems' prop
ShoppingCart.propTypes = {
cartItems: propTypes.array,
};

// Exporting the ShoppingCart component
export default ShoppingCart;