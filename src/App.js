import React from 'react';
import { Provider } from 'react-redux';
import PRODUCTS from './components/products';
import store from './store';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      
    }
  }
  render(){
  return (
    <Provider store={store}>
    <div className="grid-container">
      <header>
        <a href="/" >Products</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <PRODUCTS products={this.state.products}></PRODUCTS>
          </div>
          <div className="sidebar">
            
          </div>
        </div>
      </main>
      <footer>
        All rights reserved
      </footer>
    </div>
    </Provider>
  );
  }
}

export default App;
