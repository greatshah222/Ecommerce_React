import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import classesDetail from './Details.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Modal from '../UI/Modal/Modal';
import CartAddedSummary from '../Summary/CartAdded/CartAddedSummary';
function Details() {
  const {
    products,
    setProducts,
    cart,
    setCart,
    detailProducts,
    cartProductSummary,
    setCartProductSummary,
    showModal,
    setShowModal,
  } = useContext(ProductContext);

  let finalValue = null;
  const setProductsHandler = (id) => {
    let product = Object.values(products).find((el) => el.id === id);
    const productsClone = [...products];
    const index = productsClone.indexOf(product);

    const singleproduct = productsClone[index];
    singleproduct.inCart = !singleproduct.inCart;

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
      const index1 = newCart.indexOf(product);
      const singleCart = newCart[index1];
      const updatedCart = newCart.filter((el) => el !== singleCart);
      setCart(updatedCart);
    }
    setProducts(productsClone);
  };
  // closing modal when clicked button
  const modalClickHanlder = () => {
    setShowModal(false);
  };
  if (detailProducts) {
    const { company, img, info, price, inCart, title, id } = detailProducts;
    finalValue = (
      <div className={classesDetail.Container_Primary}>
        <div className={classesDetail.Container_Image}>
          <img src={require(`../../${img}`)} alt='img' />
        </div>
        <div className={classesDetail.Container_Details}>
          <h2>{title}</h2>
          <div className={classesDetail.Container_Details_Secondary}>
            <p>
              {' '}
              Made By: <span>{company}</span>
            </p>
            <p>
              Price: <span>{price} €</span>
            </p>
          </div>

          <p className={classesDetail.Specification}>
            Specification: <span>{info}</span>
          </p>
          <div className={classesDetail.Summary}>
            <button
              onClick={() => setProductsHandler(id)}
              className={classesDetail.buttonCart}
            >
              {!inCart ? (
                <FontAwesomeIcon
                  icon={faCartPlus}
                  color='white'
                  size='2x'
                  className={classesDetail.cartIcon}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCartArrowDown}
                  color='red'
                  size='2x'
                  className={classesDetail.cartIcon}
                />
              )}
            </button>
            <Link to='/' className={classesDetail.BuyNow}>
              Buy Now
            </Link>
            <Link to='/' className={classesDetail.BackToProducts}>
              Back To Products
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      {finalValue}
      <Modal show={showModal} backDropClose={modalClickHanlder}>
        <CartAddedSummary
          cartProductSummary={cartProductSummary}
          modalClickHanlder={modalClickHanlder}
        />
      </Modal>
    </>
  );
}

export default Details;