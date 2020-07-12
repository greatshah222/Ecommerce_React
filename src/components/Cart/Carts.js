import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import classes from './Cart.module.css';
import Cart from './Cart';
import CartTotal from './CartTotal/CartTotal';
function Carts(props) {
  const {
    cart,
    setCart,
    products,
    setProducts,
    cloneStoreProducts,
  } = useContext(ProductContext);
  let content = <h2>Your Cart is currently Empty</h2>;

  const countIncrement = (id) => {
    const product = Object.values(cart).find((el) => el.id === id);
    const index = cart.indexOf(product);
    const updatedProducts = [...cart];
    const singleProduct = { ...updatedProducts[index] };
    singleProduct.count = singleProduct.count + 1;
    singleProduct.total = singleProduct.total + singleProduct.price;
    updatedProducts[index] = singleProduct;
    setCart(updatedProducts);
  };
  const findCartproduct = (id) =>
    Object.values(cart).find((el) => el.id === id);

  const countDecrement = (id) => {
    const product = findCartproduct(id);
    const updatedProductsCart = [...cart];
    const index = updatedProductsCart.indexOf(product);

    const singleProductCart = updatedProductsCart[index];
    // if count is 1 and we again press the remove 1 button it should delete the whole that concerned product from the cart
    if (singleProductCart.count === 1) {
      const afterDeletedProduct = updatedProductsCart.filter(
        (el) => el !== singleProductCart
      );
      setCart(afterDeletedProduct);
      // now we have to remove the inCart from the products as well
      const cloneProducts = [...products];
      const singleProduct = Object.values(products).find(
        (el) => el.id === product.id
      );
      const index1 = cloneProducts.indexOf(singleProduct);
      singleProduct.inCart = !singleProduct.inCart;
      singleProduct.total = singleProduct.total - singleProduct.price;
      singleProduct.count = singleProduct.count - 1;
      cloneProducts[index1] = singleProduct;
      setProducts(cloneProducts);
    } else {
      singleProductCart.count = singleProductCart.count - 1;
      singleProductCart.total =
        singleProductCart.total - singleProductCart.price;
      updatedProductsCart[index] = singleProductCart;
      setCart(updatedProductsCart);
    }
  };
  // deleting when user press the trash button
  const deleteSingleProductFromCart = (id) => {
    // removing from the cart array first
    const product = findCartproduct(id);
    const cloneCartProduct = [...cart];
    const index = cloneCartProduct.indexOf(product);
    const singleCartProduct = cloneCartProduct[index];
    const updatedCart = cloneCartProduct.filter(
      (el) => el !== singleCartProduct
    );
    setCart(updatedCart);

    // now we have to remove the inCart from the products as well now
    const cloneProducts = [...products];
    // u again have to get the singleProduct cause of u increase the count in the cart array it will not match with the products array. and also el.id should be equal to product.id. cause we know what product has changed but we need to find index of that product in products array.
    const singleProduct = Object.values(products).find(
      (el) => el.id === product.id
    );
    const index1 = cloneProducts.indexOf(singleProduct);

    singleProduct.inCart = false;
    singleProduct.total = 0;
    singleProduct.count = 0;
    cloneProducts[index1] = singleProduct;
    setProducts(cloneProducts);
  };
  // deleting the whole cart
  const clearCartHandler = () => {
    setCart([]);
    setProducts((prevstate) => cloneStoreProducts());
    props.history.push('/');
  };
  if (cart) {
    content = cart.map((el) => (
      <Cart
        cart={el}
        key={el.title}
        countIncrement={countIncrement}
        countDecrement={countDecrement}
        deleteSingleProductFromCart={deleteSingleProductFromCart}
      />
    ));
  }
  return (
    <>
      <>
        <div className={classes.Primary}>
          {cart.length > 0 ? (
            <h2 style={{ marginBottom: '20px' }}>Your Cart</h2>
          ) : (
            <h2>Your Cart is Empty</h2>
          )}
          <div
            className={
              cart.length > 0
                ? `${classes.CartHeading} ${classes.CartHeadingSecondary}`
                : classes.CartEmpty
            }
          >
            <h3>Name </h3>
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Remove</h3>
            <h3>Total</h3>
          </div>
          {content}
        </div>
      </>
      {cart.length > 0 && <CartTotal clearCartHandler={clearCartHandler} />}
    </>
  );
}

export default Carts;
