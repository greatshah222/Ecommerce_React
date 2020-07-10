import React, { useContext } from 'react';
import classes from './Products.module.css';
import { ProductContext } from '../context/ProductContext';
import Product from './Product';

function Products() {
  const { products } = useContext(ProductContext);
  const prod = products.map((el) => <Product key={el.id} product={el} />);
  return (
    <>
      <div className={classes.container}>
        <h2>Our Products</h2>
      </div>

      <div className={classes.Products_List}>{prod}</div>
    </>
  );
}

export default Products;
