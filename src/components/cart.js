import React from 'react';
import {connect} from "react-redux";
import { removeFromCart } from "../actions/cartActions";



//import styled from 'styled-components';
//import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
// const propTypes = {};

// const defaultProps = {};

/**
 * 
 */
class cart extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}
    
    render() {
      const { cartItems} = this.props;
    return (
    
    <div >
    {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} items in the cart{" "}
          </div>
    )}
    
    <ul className="cart-items">
      {cartItems.map((item) => (
        <li key={item._id}>
          <div>
            <img src={item.image} alt={item.title}></img>
          </div>
          <div>
            <div>{item.title}</div>
            <div className="right">
              {item.price}$ x {item.count}{" "}
              <button
                className="button"
                onClick={() => this.props.removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
   
    <div className="total">
      <div>
        Total:{" "}
          {cartItems.reduce((a, c) => a + c.price * c.count, 0)} {"$"}
      </div>
      <button
        onClick={() => {
          this.setState({ showCheckout: true });
        }}
        className="button primary"
      >
        place order
      </button>
    </div>
  </div>
   

    )
    
    }
  }
       

    

  
// cart.propTypes = propTypes;
// cart.defaultProps = defaultProps;
// // #endregion

export default connect(
    (state) => ({
      cartItems: state.cart.cartItems,
    }),
    { removeFromCart }
  )(cart);