import React, { useContext } from "react";
import Layout from "../components/Layout";
import ShoppingCartContext from "../components/ShoppingCartContext";
import { Formik, Field, Form } from "formik";
import Stripe from "stripe";
import { parseCookies, setCookie } from "nookies";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.STRIPE_KEY);

export const getServerSideProps = async (ctx) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET);

  let paymentIntent;

  const { paymentIntentId } = await parseCookies(ctx);

  if (paymentIntentId) {
    paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    return {
      props: { paymentIntent },
    };
  }

  paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "USD",
  });

  setCookie(ctx, "paymentIntentID", paymentIntent.id);

  return {
    props: {
      paymentIntent,
    },
  };
};

const Checkout = (props) => {
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
              <span>total: ${item.qty * item.data.price}</span>
            </div>
          ))}
          <div>
            <h3>Cart Total: ${cart.cartTotal}</h3>
          </div>

          <pre>{JSON.stringify(props, null, 2)}</pre>
        </div>
        <div className="flex flex-col items-center h-full flex-1">
          <Elements stripe={stripePromise}>
            <Formik
              initialValues={{
                email: "",
                billing: {
                  firstName: "",
                  lastName: "",
                  addressLine1: "",
                  addressLine2: "",
                  city: "",
                  state: "",
                  zip: "",
                },
                shipping: {
                  firstName: "",
                  lastName: "",
                  addressLine1: "",
                  addressLine2: "",
                  city: "",
                  state: "",
                  zip: "",
                },
                sameAsShipping: false,
              }}
              onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true);
                console.log(data);
                setSubmitting(false);
              }}
            >
              {({ values, isSubmitting }) => (
                <Form class="max-w-lg w-full">
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="mb-6 px-3 w-full md:w-1/2 md:mb-0">
                      <label
                        class="block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase"
                        for="grid-first-name"
                      >
                        First Name
                      </label>

                      <Field
                        class="appearance-none focus:bg-white bg-gray-200 border-red-500 rounded border block leading-tight mb-3 focus:outline-none py-3 px-4 text-gray-700 w-full"
                        name="billing.firstName"
                        placeholder="First Name"
                        type="input"
                      />
                      <p class="text-xs italic text-red-500">
                        Please fill out this field.
                      </p>
                    </div>
                    <div class="px-3 w-full md:w-1/2">
                      <label
                        class="block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase"
                        for="grid-last-name"
                      >
                        Last Name
                      </label>

                      <Field
                        class="appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight focus:outline-none py-3 px-4 text-gray-700 w-full"
                        name="billing.lastName"
                        placeholder="Last Name"
                        type="input"
                      />
                    </div>
                  </div>
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="px-3 w-full">
                      <label
                        class="block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase"
                        for="grid-password"
                      >
                        Email
                      </label>
                      <Field
                        class="appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight mb-3 focus:outline-none py-3 px-4 text-gray-700 w-full"
                        id="grid-email"
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="flex -mx-3 mb-6">
                    <div class="px-3 w-full">
                      <label
                        class="block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase"
                        for="grid-password"
                      >
                        Address Line 1
                      </label>
                      <Field
                        class="appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight mb-3 focus:outline-none py-3 px-4 text-gray-700"
                        id="grid-email"
                        type="input"
                        name="billing.addressLine1"
                        placeholder="Address Line 1"
                      />
                    </div>
                    <div class="px-3 w-full">
                      <label
                        class="block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase"
                        for="grid-password"
                      >
                        Address Line 2
                      </label>
                      <Field
                        class="appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight mb-3 focus:outline-none py-3 px-4 text-gray-700"
                        id="grid-email"
                        type="input"
                        name="billing.addressLine2"
                        placeholder="Address Line 2"
                      />
                    </div>
                  </div>
                  <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="mb-6 px-3 w-full md:w-1/3 md:mb-0">
                      <label
                        class="block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase"
                        for="grid-city"
                      >
                        City
                      </label>

                      <Field
                        class="appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight focus:outline-none py-3 px-4 text-gray-700 w-full"
                        name="billing.city"
                        placeholder="City"
                        type="input"
                      />
                    </div>
                    <div class="mb-6 px-3 w-full md:w-1/3 md:mb-0">
                      <label
                        class="block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase"
                        for="grid-state"
                      >
                        State
                      </label>
                      <div class="relative">
                        <select
                          as="select"
                          class="appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight focus:outline-none py-3 px-4 pr-8 text-gray-700 w-full"
                          id="grid-state"
                          name="billing.state"
                        >
                          <option value="billing.state">New Mexico</option>
                          <option>Missouri</option>
                          <option>Texas</option>
                        </select>
                        <div class="items-center flex inset-y-0 right-0 px-2 pointer-events-none absolute text-gray-700">
                          <svg
                            class="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="mb-6 px-3 w-full md:w-1/3 md:mb-0">
                      <label
                        class="block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase"
                        for="grid-zip"
                      >
                        Zip
                      </label>

                      <Field
                        class="appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight focus:outline-none py-3 px-4 text-gray-700 w-full"
                        name="billing.zip"
                        placeholder="Zip"
                        type="input"
                      />
                    </div>
                  </div>
                  <div>
                    <Field type="checkbox" name="sameAsShipping" />
                  </div>
                  <div
                    class={`flex flex-wrap -mx-3 mb-6 ${
                      values.sameAsShipping ? "hidden" : ""
                    }`}
                  >
                    <hr className="border-t-2" />
                    <div class="mb-6 px-3 w-full md:w-1/2 md:mb-0">
                      <label
                        class="block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase"
                        for="grid-first-name"
                      >
                        First Name
                      </label>

                      <Field
                        class="appearance-none focus:bg-white bg-gray-200 border-red-500 rounded border block leading-tight mb-3 focus:outline-none py-3 px-4 text-gray-700 w-full"
                        name="shipping.firstName"
                        placeholder="First Name"
                        type="input"
                      />
                      <p class="text-xs italic text-red-500">
                        Please fill out this field.
                      </p>
                    </div>
                    <div class="px-3 w-full md:w-1/2">
                      <label
                        class="block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase"
                        for="grid-last-name"
                      >
                        Last Name
                      </label>

                      <Field
                        class="appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight focus:outline-none py-3 px-4 text-gray-700 w-full"
                        name="shipping.lastName"
                        placeholder="Last Name"
                        type="input"
                      />
                    </div>
                    <div class="flex -mx-3 mb-6">
                      <div class="px-3 w-full">
                        <label
                          class="block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase"
                          for="grid-password"
                        >
                          Address Line 1
                        </label>
                        <Field
                          class="appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight mb-3 focus:outline-none py-3 px-4 text-gray-700"
                          id="grid-email"
                          type="input"
                          name="shipping.addressLine1"
                          placeholder="Address Line 1"
                        />
                      </div>
                      <div class="px-3 w-full">
                        <label
                          class="block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase"
                          for="grid-password"
                        >
                          Address Line 2
                        </label>
                        <Field
                          class="appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight mb-3 focus:outline-none py-3 px-4 text-gray-700"
                          id="grid-email"
                          type="input"
                          name="shipping.addressLine2"
                          placeholder="Address Line 2"
                        />
                      </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2">
                      <div class="mb-6 px-3 w-full md:w-1/3 md:mb-0">
                        <label
                          class="block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase"
                          for="grid-city"
                        >
                          City
                        </label>

                        <Field
                          class="appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight focus:outline-none py-3 px-4 text-gray-700 w-full"
                          name="shipping.city"
                          placeholder="City"
                          type="input"
                        />
                      </div>
                      <div class="mb-6 px-3 w-full md:w-1/3 md:mb-0">
                        <label
                          class="block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase"
                          for="grid-state"
                        >
                          State
                        </label>
                        <div class="relative">
                          <select
                            as="select"
                            class="appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight focus:outline-none py-3 px-4 pr-8 text-gray-700 w-full"
                            id="grid-state"
                            name="shipping.state"
                          >
                            <option value="billing.state">New Mexico</option>
                            <option>Missouri</option>
                            <option>Texas</option>
                          </select>
                          <div class="items-center flex inset-y-0 right-0 px-2 pointer-events-none absolute text-gray-700">
                            <svg
                              class="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div class="mb-6 px-3 w-full md:w-1/3 md:mb-0">
                        <label
                          class="block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase"
                          for="grid-zip"
                        >
                          Zip
                        </label>

                        <Field
                          class="appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight focus:outline-none py-3 px-4 text-gray-700 w-full"
                          name="shipping.zip"
                          placeholder="Zip"
                          type="input"
                        />
                      </div>
                    </div>
                  </div>
                  <button type="submit" disabled={isSubmitting}>
                    {" "}
                    Submit{" "}
                  </button>
                  <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>
              )}
            </Formik>
          </Elements>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
