import '../styles/styles.css';
import React, { useState } from 'react';
import App from 'next/app';
import ShoppingCartContext from '../components/ShoppingCartContext';
import ProductsContext from '../components/ProductsContext';
import LogRocket from 'logrocket';

LogRocket.init(process.env.LOGROCKET_KEY);

function MyApp({ Component, pageProps }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [cart, updateCart] = useState({
    cartTotal: 0,
    cartItems: [],
    checkoutComplete: false,
  });

  const additemToCart = (id, qty) => {
    const { cartItems, cartTotal } = cart;
    let newCartItems;
    let item = cartItems.filter((cartItem) => cartItem.id === id);
    if (item.length) {
      item[0].qty += qty;
      newCartItems = cartItems.map((cartItem) =>
        cartItem.id === id ? item[0] : cartItem
      );
    } else {
      item = products.filter((product) => product.id === id);
      item[0] = { ...item[0], qty: qty };
      newCartItems = [...cartItems, item[0]];
    }

    const newCartTotal =
      parseInt(cartTotal) + parseInt(item[0].price) * parseInt(item[0].qty);

    updateCart({
      ...cart,
      cartTotal: newCartTotal,
      cartItems: newCartItems,
    });
  };

  const createProductCatergories = (products) => {
    let categories = products.map((item) => item.metadata.Category);
    let productCategories = [...new Set(categories)];
    setCategories(productCategories);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        selectedProduct,
        categories,
        createProductCatergories,
        setProducts,
        setSelectedProduct,
      }}
    >
      <ShoppingCartContext.Provider value={{ cart, additemToCart }}>
        <Component {...pageProps} />
      </ShoppingCartContext.Provider>
    </ProductsContext.Provider>
  );
}
export default MyApp;
