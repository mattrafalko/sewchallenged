import React, { useContext } from "react";
import Modal from "react-modal";
import CartModalContext from "./CartModalContext";
import ShoppingCartContext from "./ShoppingCartContext";
import { Formik, Field, Form } from "formik";

const CartModal = () => {
  Modal.setAppElement("#__next");
  const { modalOpen, toggleModal } = useContext(CartModalContext);
  const { cart } = useContext(ShoppingCartContext);

  return (
    <div className="">
      <Modal isOpen={modalOpen} onRequestClose={() => toggleModal()}>
        <div className="flex justify-end">
          <button onClick={() => toggleModal()}>Close</button>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center h-full flex-1">
            {cart.cartItems.map((item) => (
              <div>
                <h3>Your SewChallenged Order</h3>
                <span>${cart.cartTotal}</span>

                <span>{item.data.name[0].text}</span>
                <span>{item.data.description[0].text}</span>
                <span>{item.data.price}</span>
                <span>{item.qty}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center h-full flex-1">
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
                // <Form>
                //   <div className="flex flex-col">
                //     <h2>
                //       Billing {values.sameAsShipping ? "& Shipping" : ""}{" "}
                //       Information
                //     </h2>
                //     <div className="flex flex-col">

                //       <Field
                //         name="billing.firstName"
                //         placeholder="First Name"
                //         type="input"
                //       />
                //       <Field
                //         name="billing.lastName"
                //         placeholder="Last Name"
                //         type="input"
                //       />
                //     </div>
                //     <div>
                //       <Field name="email" placeholder="Email" type="email" />
                //     </div>
                //     <div>
                //       <Field
                //         name="billing.addressLine1"
                //         placeholder="Address Line 1"
                //         type="input"
                //       />
                //       <Field
                //         name="billing.addressLine2"
                //         placeholder="Address Line 2"
                //         type="input"
                //       />
                //       <Field
                //         name="billing.city"
                //         placeholder="City"
                //         type="input"
                //       />
                //       <Field
                //         name="billing.state"
                //         placeholder="State"
                //         type="input"
                //       />
                //       <Field
                //         name="billing.zip"
                //         placeholder="Zip"
                //         type="input"
                //       />
                //       <Field name="sameAsShipping" type="checkbox" />
                //     </div>
                //     <div className={values.sameAsShipping ? "hidden" : ""}>
                //       <h2>Shipping Information</h2>
                //       <Field
                //         name="shipping.firstName"
                //         placeholder="First Name"
                //         type="input"
                //       />
                //       <Field
                //         name="shipping.lastName"
                //         placeholder="Last Name"
                //         type="input"
                //       />

                //       <div>
                //         <Field
                //           name="shipping.addressLine1"
                //           placeholder="Address Line 1"
                //           type="input"
                //         />
                //         <Field
                //           name="shipping.addressLine2"
                //           placeholder="Address Line 2"
                //           type="input"
                //         />
                //         <Field
                //           name="shipping.city"
                //           placeholder="City"
                //           type="input"
                //         />
                //         <Field
                //           name="shipping.state"
                //           placeholder="State"
                //           type="input"
                //         />
                //         <Field
                //           name="shipping.zip"
                //           placeholder="Zip"
                //           type="input"
                //         />
                //       </div>
                //     </div>
                //   </div>
                //   <button type="submit" disabled={isSubmitting}>
                //     Submit
                //   </button>
                //   <pre>{JSON.stringify(values, null, 2)}</pre>
                // </Form>
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
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CartModal;
