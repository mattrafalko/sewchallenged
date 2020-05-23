import React, { useContext } from 'react';
import Layout from '../components/Layout';
import ShoppingCartContext from '../components/ShoppingCartContext';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.STRIPE_KEY);

const Checkout = () => {
  const { cart } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='flex lg:flex-row flex-col border rounded p-6 shadow-lg'>
        <div className='flex flex-col justify-between mb-6 w-1/2'>
          <div>
            <h3 className='text-5xl font-extrabold tracking-wide'>
              Your Order
            </h3>
          </div>

          <div className=''>
            {cart.cartItems.map((item, i) => (
              <div className='flex-col flex border-b-2 hover:border-green-300 border-gray-200 mb-3'>
                <div
                  key={i}
                  className='flex justify-between font-semibold text-xl mt-3'
                >
                  <div>
                    <span className=''>{item.name}</span>
                  </div>
                  <div>
                    <span className=''>
                      ${item.price / 100} x {item.qty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className='mt-4 text-3xl text-left'>
              Cart Total: ${cart.cartTotal}
            </h3>
          </div>
        </div>

        <Elements stripe={stripePromise}>
          <CheckoutForm total={cart.cartTotal} items={cart.cartItems} />
        </Elements>
      </div>
    </Layout>
  );
};

export default Checkout;
