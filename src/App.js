import React from 'react';
import './App.css';

import Details from './components/Product/Details';
import Cart from './components/Product/Cart';
import PageNotFound from './components/UI/NotFound/PageNotFound';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Products from './components/Product/Products';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/cart' component={Cart} />
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
