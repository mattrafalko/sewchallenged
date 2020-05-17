import React, { useContext } from "react";
import ShoppingCartContext from "./ShoppingCartContext";
import CartModal from "./CartModal";
import CartModalContext from "./CartModalContext";

const CartInfo = () => {
  const { cart } = useContext(ShoppingCartContext);
  const { toggleModal } = useContext(CartModalContext);

  return (
    <div className="sticky top-0 flex justify-between p-6 rounded-lg bg-pink-200 items-center w-full">
      <h1>Cart Total: ${cart.cartTotal}</h1>
      <button className="addToCartButton" onClick={() => toggleModal()}>
        Checkout
      </button>
      <CartModal />
    </div>
  );
};

export default CartInfo;