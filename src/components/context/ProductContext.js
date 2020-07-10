import React, { useState } from 'react';
import { storeProducts } from '../../data';

export const ProductContext = React.createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState(storeProducts);
  const [detailProducts, setDetailProducts] = useState(storeProducts);
  return (
    <ProductContext.Provider
      // double curly bracket cause it is an object
      value={{
        products: products,
        setDetailProducts: setDetailProducts,
        detailProducts: detailProducts,
        setProducts: setProducts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
