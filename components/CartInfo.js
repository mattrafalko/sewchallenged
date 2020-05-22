import React, { useContext } from 'react';
import ShoppingCartContext from './ShoppingCartContext';
import Link from 'next/link';

const CartInfo = () => {
  const { cart } = useContext(ShoppingCartContext);

  return (
    <React.Fragment>
      <div className=' flex justify-between p-6 rounded-lg bg-gray-200 items-center w-full'>
        <h1>Cart Total: ${cart.cartTotal}</h1>
        <button
          className='bg-gray-600 hover:bg-gray-700 text-white text-sm px-4 py-2  border rounded-full text-xl'
          disabled={cart.cartItems.length <= 0 ? 'disabled' : ''}
        >
          <Link href='/checkout'>
            <a>Checkout</a>
          </Link>
        </button>
      </div>
    </React.Fragment>
  );
};

export default CartInfo;
