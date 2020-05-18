import React, { useContext } from "react";
import ShoppingCartContext from "./ShoppingCartContext";
import Link from "next/link";

const CartInfo = () => {
  const { cart } = useContext(ShoppingCartContext);

  return (
    <React.Fragment>
      <div className="sticky top-0 flex justify-between p-6 rounded-lg bg-green-200 items-center w-full">
        <h1>Cart Total: ${cart.cartTotal}</h1>
        <button
          class="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2  border rounded-full text-xl"
          disabled={cart.cartItems.length <= 0 ? "disabled" : ""}
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
