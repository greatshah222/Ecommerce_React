import React, { useContext } from 'react';
import classes from './Products.module.css';
import { ProductContext } from '../context/ProductContext';
import Product from './Product';
import Modal from '../UI/Modal/Modal';
import CartAddedSummary from '../Summary/CartAdded/CartAddedSummary';

function Products() {
  const {
    products,
    setProducts,
    setDetailProducts,
    cart,
    setCart,
    cartProductSummary,
    setCartProductSummary,
    showModal,
    setShowModal,
  } = useContext(ProductContext);
  // for showing modal

  const setProductsHandler = (id) => {
    // finding the id from the product array and removing or adding the value first
    let product = Object.values(products).find((el) => el.id === id);
    const productsClone = [...products];
    const index = productsClone.indexOf(product);

    const singleproduct = productsClone[index];
    singleproduct.inCart = !singleproduct.inCart;
    // here we have already removed from the cart  if it was there so when the user click for adding into the cart we need to add the price and count

    // adding count + to cart while adding
    if (singleproduct.inCart) {
      const price = singleproduct.price;
      singleproduct.total = price;
      singleproduct.count = 1;

      productsClone[index] = singleproduct;

      // setting to cart array in state
      setCart([...cart, singleproduct]);

      // for showimg summary modal
      setCartProductSummary(singleproduct);
      // showing modal
      setShowModal(true);
    }
    //removing  count - to cart while removing from cart
    else {
      const price = singleproduct.price;
      singleproduct.total = singleproduct.total - price;
      singleproduct.count = singleproduct.count - 1;
      productsClone[index] = singleproduct;
      // removing from cart array from state while user clicks remove from cart
      const newCart = [...cart];
      // we need to search the procuct in the cart array by id so if the cart product value changes while adding or deleting item in chekout page we can still find the actual product.
      const productCart = Object.values(newCart).find((el) => el.id === id);

      const index1 = newCart.indexOf(productCart);
      const singleCart = newCart[index1];

      const updatedCart = newCart.filter((el) => el !== singleCart);
      setCart(updatedCart);
    }
    setProducts(productsClone);
  };

  const handleDetails = (id) => {
    // u cannot use filter cause it returns a new array
    let product = Object.values(products).find((el) => el.id === id);
    setDetailProducts(product);
  };
  // closing modal when clicked button
  const modalClickHanlder = () => {
    setShowModal(false);
  };

  let prod = null;
  if (products) {
    prod = products.map((el) => (
      <Product
        key={el.id}
        product={el}
        setProductsHandler={() => setProductsHandler(el.id)}
        handleDetails={() => handleDetails(el.id)}
      />
    ));
  }
  return (
    <>
      <div className={classes.container}>
        <h2>Our Products</h2>
      </div>

      <div className={classes.Products_List}>{prod}</div>
      <Modal show={showModal} backDropClose={modalClickHanlder}>
        <CartAddedSummary
          cartProductSummary={cartProductSummary}
          modalClickHanlder={modalClickHanlder}
        />
      </Modal>
    </>
  );
}

export default Products;
