import React, { useContext } from "react";
import Layout from "../components/Layout";
import ShoppingCartContext from "../components/ShoppingCartContext";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.STRIPE_KEY);

const Checkout = () => {
  const { cart } = useContext(ShoppingCartContext);

  const paymentDescription = cart.cartItems.map((item) => ({
    item: item.data.name[0].text,
    description: item.data.description[0].text,
    quantity: item.qty,
    price: item.data.price,
  }));

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
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            price={cart.cartTotal}
            description={paymentDescription}
          />
        </Elements>
      </div>
    </Layout>
  );
};

export default Checkout;
