import React, { useContext } from 'react';
import ShoppingCartContext from './ShoppingCartContext';
import Link from 'next/link';

const CartInfo = () => {
  const { cart } = useContext(ShoppingCartContext);

  return (
    <React.Fragment>
      <div className=' flex justify-between shadow-inner p-6 rounded-lg bg-gray-200 items-center w-full'>
        <span className='flex text-xl space-x-4 items-center'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z'
              fill='currentColor'
            />
            <path
              d='M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z'
              fill='currentColor'
            />
            <path
              d='M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z'
              fill='currentColor'
            />
          </svg>{' '}
          <span>${cart.cartTotal}</span>
        </span>
        <button
          className='bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 shadow-lg border rounded-full text-xl'
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
