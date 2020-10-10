import { connect } from 'react-redux';
import React  from 'react';
import { fetchProducts } from '../actions/productsAction';
import { addTocart } from "../actions/cartActions";
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
class products extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        product:null
    };
}
componentDidMount(){
    this.props.fetchProducts();
    console.log(this.props.fetchProducts());
}

    render() {
        return (<div>
          {
          !this.props.products ?( <div>..loading</div>):
          
            (<ul className="products">
              {this.props.products.map((product) => (
                <li key={product._id}>
                  <div className="product">
                    <a
                      href={"#" + product._id}
                    >
                      <img src={product.image} alt={product.title}></img>
                      <p>{product.name} ({product.category})</p>
                      <p>Available : { product.availableQuantity}</p>
                    </a>
                    <div className="product-price">
                      <div>{product.price} $</div>
                      <button
                        onClick={() => this.props.addTocart(product)}
                        className="button primary"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            )}
        </div>
        );
    }
}

// products.propTypes = propTypes;
// products.defaultProps = defaultProps;
// // #endregion

export default connect((state)=>({products:state.products.items}),{fetchProducts,addTocart})
(products);
