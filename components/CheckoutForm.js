import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import * as Yup from 'yup';

const checkoutSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Please enter at least your full first name.')
    .max(50, 'How about just your first and last name?')
    .required('Required'),
  email: Yup.string()
    .email('Please enter a valid email. We just want to send you a receipt 😊')
    .required('Required'),
});

const stripePromise = loadStripe(process.env.STRIPE_KEY);

const CheckoutForm = ({ total, items }) => {
  const [checkoutFailed, setCheckoutFailed] = useState(null);

  const createStripeSession = async (data, items, total) => {
    try {
      const response = await axios.post('/api/createSession', {
        data,
        items,
        total,
      });

      if (response.status !== 200) throw response;

      return response.data.id;
    } catch (error) {
      setCheckoutFailed(error);
      return;
    }
  };

  const redirectToStripe = async (sessionID) => {
    try {
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: sessionID,
      });
      if (error) throw error;
    } catch (error) {
      setCheckoutFailed(error);
      return;
    }
  };

  return (
    <div className='flex flex-col items-center h-full flex-1'>
      <Formik
        initialValues={{
          name: '',
          email: '',
        }}
        validationSchema={checkoutSchema}
        onSubmit={async (data) => {
          const id = await createStripeSession(data, items, total);
          redirectToStripe(await id);
        }}
      >
        {({ values, errors, touched }) => (
          <Form class='max-w-lg w-full border rounded p-6'>
            <div class='flex flex-wrap -mx-3 mb-6'>
              <div class='mb-6 px-3 w-full md:mb-0'>
                <label
                  class='block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase'
                  for='grid-first-name'
                >
                  Name
                </label>

                <Field
                  class={`appearance-none focus:bg-white bg-gray-200  rounded border block leading-tight mb-3 focus:outline-none py-3 px-4 text-gray-700 w-full ${
                    errors.name && touched.name ? 'border-red-500' : ''
                  }`}
                  name='name'
                  placeholder='First Name'
                  type='input'
                />
                <div className=''>
                  {errors.name && touched.name ? (
                    <p class='text-xs'>{errors.name}</p>
                  ) : null}
                </div>
              </div>
            </div>
            <div class='flex flex-wrap -mx-3 mb-6'>
              <div class='px-3 w-full'>
                <label
                  class='block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase'
                  for='grid-email'
                >
                  Email
                </label>
                <Field
                  class={`appearance-none focus:bg-white bg-gray-200  rounded border block leading-tight mb-3 focus:outline-none py-3 px-4 text-gray-700 w-full ${
                    errors.name && touched.name ? 'border-red-500' : ''
                  }`}
                  id='grid-email'
                  type='email'
                  name='email'
                  placeholder='Email'
                />
              </div>
              <div className=''>
                {errors.email && touched.email ? (
                  <p class='text-xs '>{errors.email}</p>
                ) : null}
              </div>
            </div>

            <button
              type='submit'
              disabled={
                (errors && !values.email) || (errors && !values.name)
                  ? 'disabled'
                  : ''
              }
              class={`bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2  border rounded-full ${
                (errors && !values.email) || (errors && !values.name)
                  ? ' cursor-not-allowed'
                  : ''
              }`}
            >
              <span class='mx-auto'>Place Order</span>
            </button>
            {!checkoutFailed ? (
              ''
            ) : (
              <div>
                {checkoutFailed.name === 'IntegrationError' ? (
                  <p>
                    Sorry, were having issues processing your order at this
                    time. Please reach out to mattrafalko@gmail.com.{' '}
                  </p>
                ) : (
                  <p>{checkoutFailed.message}</p>
                )}
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutForm;
