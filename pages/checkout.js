import React, { useContext } from "react";
import Layout from "../components/Layout";
import ShoppingCartContext from "../components/ShoppingCartContext";
import Stripe from "stripe";
import { parseCookies, setCookie } from "nookies";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.STRIPE_KEY);

export const getServerSideProps = async (ctx) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET);
  let paymentIntent;
  const { paymentIntentId } = await parseCookies(ctx);

  if (paymentIntentId) {
    paymentIntent = stripe.paymentIntents.retrieve(paymentIntentId);
    return {
      props: { paymentIntent },
    };
  }

  let { cart } = parseCookies(ctx);

  paymentIntent = await stripe.paymentIntents.create({
    currency: "USD",
    amount: cart.cartTotal * 100,
    description: cart.cartItems,
  });

  setCookie(ctx, "paymentIntentID", paymentIntent.id);

  return {
    props: {
      paymentIntent,
    },
  };
};

const Checkout = ({ paymentIntent }) => {
  const { cart } = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="flex justify-end"></div>
      <div className="flex">
        <div className="flex flex-col h-full flex-1">
          <div>
            <h3>Your Order</h3>
          </div>

          <div className="flex justify-between">
            <span>Item</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total Cost</span>
          </div>
          {cart.cartItems.map((item) => (
            <div className="flex justify-between">
              <span>{item.data.name[0].text}</span>
              <span>${item.data.price}</span>
              <span>{item.qty}</span>
              <span>${item.qty * item.data.price}</span>
            </div>
          ))}
          <div>
            <h3>Cart Total: ${cart.cartTotal}</h3>
          </div>
          <pre>{JSON.stringify(paymentIntent, null, 2)}</pre>
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm paymentIntent={paymentIntent} />
        </Elements>
      </div>
    </Layout>
  );
};

export default Checkout;
