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
          const id = await createStripeSession(data, items);
          redirectToStripe(await id);
        }}
      >
        {({ values, errors, touched }) => (
          <Form className='max-w-lg w-full border rounded p-6 shadow-inner'>
            <div className='flex flex-wrap mb-6'>
              <div className='mb-6 px-3 w-full md:mb-0'>
                <label
                  className='block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase'
                  forhtml='grid-name'
                >
                  Name
                </label>

                <Field
                  className={`appearance-none focus:bg-white bg-gray-200  rounded border block leading-tight focus:outline-none py-3 px-4 text-gray-700 w-full ${
                    errors.name && touched.name ? 'border-red-500' : ''
                  }`}
                  name='name'
                  placeholder='First Name'
                  type='input'
                />
                <div className=''>
                  {errors.name && touched.name ? (
                    <p className='text-sm'>{errors.name}</p>
                  ) : null}
                </div>
              </div>
            </div>
            <div className='flex flex-wrap'>
              <div className='mb-6 px-3 w-full md:mb-0'>
                <label
                  className='block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase'
                  forhtml='grid-email'
                >
                  Email
                </label>
                <Field
                  className={`appearance-none focus:bg-white bg-gray-200  rounded border block leading-tight focus:outline-none py-3 px-4 text-gray-700 w-full ${
                    errors.name && touched.name ? 'border-red-500' : ''
                  }`}
                  id='grid-email'
                  type='email'
                  name='email'
                  placeholder='Email'
                />

                <div className=''>
                  {errors.email && touched.email ? (
                    <p className='text-sm '>{errors.email}</p>
                  ) : null}
                </div>
              </div>
            </div>

            <button
              type='submit'
              disabled={
                (errors && !values.email) || (errors && !values.name)
                  ? 'disabled'
                  : ''
              }
              className={`bg-teal-600 w-full mt-12 shadow-md hover:bg-teal-700 text-white text-xl px-4 py-2  border rounded-full ${
                (errors && !values.email) || (errors && !values.name)
                  ? ' cursor-not-allowed'
                  : ''
              }`}
            >
              <span className='mx-auto'>Pay with Stripe</span>
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
