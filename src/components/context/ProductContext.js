import React, { useState, useEffect } from 'react';
import { storeProducts } from '../../data';

export const ProductContext = React.createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [detailProducts, setDetailProducts] = useState();
  const [cart, setCart] = useState([]);
  const [cartProductSummary, setCartProductSummary] = useState();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    cloneStoreProducts();
  }, []);
  // we have to destructure the main storeProduct else we will mutate the original one i.e storeProduct
  const cloneStoreProducts = () => {
    let products = [];
    storeProducts.forEach((el) => {
      const singleItem = { ...el };
      products = [...products, singleItem];
    });
    setProducts(products);
  };
  return (
    <ProductContext.Provider
      // double curly bracket cause it is an object
      value={{
        products: products,
        setDetailProducts,
        detailProducts,
        setProducts,
        cart,
        setCart,
        cartProductSummary,
        setCartProductSummary,
        showModal,
        setShowModal,
        cloneStoreProducts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
