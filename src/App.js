import React from 'react';
import './App.css';

import PageNotFound from './components/UI/NotFound/PageNotFound';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Products from './components/Product/Products';
import Carts from './components/Cart/Carts';
import Details from './components/ProductDetail/Details';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/cart' component={Carts} />
          <Route path='/details' component={Details} />
          <Route path='/not-found' component={PageNotFound} />
          <Route path='/' component={Products} />
          <Redirect to='/not-found' />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
