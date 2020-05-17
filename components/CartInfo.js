import React, { useContext } from "react";
import ShoppingCartContext from "./ShoppingCartContext";
import Link from "next/link";
import { setCookie } from "nookies";

const CartInfo = () => {
  const { cart } = useContext(ShoppingCartContext);

  return (
    <React.Fragment>
      <div className="sticky top-0 flex justify-between p-6 rounded-lg bg-pink-200 items-center w-full">
        <h1>Cart Total: ${cart.cartTotal}</h1>
        <button
          className="addToCartButton"
          disabled={cart.cartItems.length <= 0 ? "disabled" : ""}
          onClick={() => setCookie(ctx, "cart", cart)}
        >
          <Link href="/checkout">
            <a>Checkout</a>
          </Link>
        </button>
      </div>
    </React.Fragment>
  );
};

export default CartInfo;
