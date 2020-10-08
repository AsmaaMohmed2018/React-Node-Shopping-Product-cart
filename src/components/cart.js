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
        const {cartItems}= this.props;
        return (<div className="cart">
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item._id}>
                <div>
                  <img src={item.image} alt={item.title}></img>
                </div>
                <div>
                  <div>{item.title}</div>
                  <div className="right">
                    {item.price} x {item.count}{" "}
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
    
      </div>)
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