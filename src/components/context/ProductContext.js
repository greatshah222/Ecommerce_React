import React, { useState, useEffect } from 'react';
import { storeProducts, detailProduct } from '../../data';

export const ProductContext = React.createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState(storeProducts);
  const [detailProducts, setDetailProducts] = useState();
  const [cart, setCart] = useState([]);
  // useEffect(() => {
  //   let products = [];
  //   storeProducts.forEach((el) => {
  //     const singleItem = { ...el };
  //     products = [...products, singleItem];
  //   });
  //   setProducts(products);
  // }, []);
  // console.log(products);
  return (
    <ProductContext.Provider
      // double curly bracket cause it is an object
      value={{
        products: products,
        setDetailProducts: setDetailProducts,
        detailProducts: detailProducts,
        setProducts: setProducts,
        cart,
        setCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
