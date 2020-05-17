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
                <Form>
                  <div className="flex flex-col">
                    <h2>
                      Billing {values.sameAsShipping ? "& Shipping" : ""}{" "}
                      Information
                    </h2>
                    <div className="flex flex-col">
                      <label className="" for="billing.firstName">
                        First Name
                      </label>
                      <Field
                        name="billing.firstName"
                        placeholder="First Name"
                        type="input"
                      />
                      <Field
                        name="billing.lastName"
                        placeholder="Last Name"
                        type="input"
                      />
                    </div>
                    <div>
                      <Field name="email" placeholder="Email" type="email" />
                    </div>
                    <div>
                      <Field
                        name="billing.addressLine1"
                        placeholder="Address Line 1"
                        type="input"
                      />
                      <Field
                        name="billing.addressLine2"
                        placeholder="Address Line 2"
                        type="input"
                      />
                      <Field
                        name="billing.city"
                        placeholder="City"
                        type="input"
                      />
                      <Field
                        name="billing.state"
                        placeholder="State"
                        type="input"
                      />
                      <Field
                        name="billing.zip"
                        placeholder="Zip"
                        type="input"
                      />
                      <Field name="sameAsShipping" type="checkbox" />
                    </div>
                    <div className={values.sameAsShipping ? "hidden" : ""}>
                      <h2>Shipping Information</h2>
                      <Field
                        name="shipping.firstName"
                        placeholder="First Name"
                        type="input"
                      />
                      <Field
                        name="shipping.lastName"
                        placeholder="Last Name"
                        type="input"
                      />

                      <div>
                        <Field
                          name="shipping.addressLine1"
                          placeholder="Address Line 1"
                          type="input"
                        />
                        <Field
                          name="shipping.addressLine2"
                          placeholder="Address Line 2"
                          type="input"
                        />
                        <Field
                          name="shipping.city"
                          placeholder="City"
                          type="input"
                        />
                        <Field
                          name="shipping.state"
                          placeholder="State"
                          type="input"
                        />
                        <Field
                          name="shipping.zip"
                          placeholder="Zip"
                          type="input"
                        />
                      </div>
                    </div>
                  </div>
                  <button type="submit" disabled={isSubmitting}>
                    Submit
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
