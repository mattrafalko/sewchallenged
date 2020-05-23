import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.STRIPE_KEY);

const CheckoutForm = ({ price, description }) => {
  const stripe = useStripe();
  const elements = useElements();

  return (
    <div className='flex flex-col items-center h-full flex-1'>
      <Formik
        initialValues={{
          billing: {
            address: {
              line1: '',
              line2: '',
              city: '',
              state: '',
              postal_code: '',
              country: 'US',
            },
            name: '',
            email: '',
          },
          shipping: {
            address: {
              line1: '',
              line2: '',
              city: '',
              state: '',
              postal_code: '',
              country: 'US',
            },
            name: '',
          },
          sameAsShipping: true,
        }}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true);

          try {
            const response = await axios.post('/api/createSession', {
              billing: { ...data.billing },
              shipping: { ...data.shipping },
            });
            console.log(response);

            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({
              sessionId: response.data.id,
            });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ values, isSubmitting }) => (
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
                  class='appearance-none focus:bg-white bg-gray-200 border-red-500 rounded border block leading-tight mb-3 focus:outline-none py-3 px-4 text-gray-700 w-full'
                  name='billing.name'
                  placeholder='First Name'
                  type='input'
                />
                <p class='text-xs italic text-red-500'>
                  Please fill out this field.
                </p>
              </div>
            </div>
            <div class='flex flex-wrap -mx-3 mb-6'>
              <div class='px-3 w-full'>
                <label
                  class='block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase'
                  for='grid-password'
                >
                  Email
                </label>
                <Field
                  class='appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight mb-3 focus:outline-none py-3 px-4 text-gray-700 w-full'
                  id='grid-email'
                  type='email'
                  name='billing.email'
                  placeholder='Email'
                />
              </div>
            </div>
            <div class='flex -mx-3 mb-6'>
              <div class='px-3 w-full'>
                <label
                  class='block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase'
                  for='grid-password'
                >
                  Address Line 1
                </label>
                <Field
                  class='appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight mb-3 focus:outline-none py-3 px-4 text-gray-700'
                  id='grid-email'
                  type='input'
                  name='billing.address.line1'
                  placeholder='Address Line 1'
                />
              </div>
              <div class='px-3 w-full'>
                <label
                  class='block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase'
                  for='grid-password'
                >
                  Address Line 2
                </label>
                <Field
                  class='appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight mb-3 focus:outline-none py-3 px-4 text-gray-700'
                  id='grid-email'
                  type='input'
                  name='billing.address.line2'
                  placeholder='Address Line 2'
                />
              </div>
            </div>
            <div class='flex flex-wrap -mx-3 mb-2'>
              <div class='mb-6 px-3 w-full md:w-1/3 md:mb-0'>
                <label
                  class='block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase'
                  for='grid-city'
                >
                  City
                </label>

                <Field
                  class='appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight focus:outline-none py-3 px-4 text-gray-700 w-full'
                  name='billing.address.city'
                  placeholder='City'
                  type='input'
                />
              </div>
              <div class='mb-6 px-3 w-full md:w-1/3 md:mb-0'>
                <label
                  class='block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase'
                  for='grid-state'
                >
                  State
                </label>
                <div class='relative'>
                  <select
                    as='select'
                    class='appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight focus:outline-none py-3 px-4 pr-8 text-gray-700 w-full'
                    id='grid-state'
                    name='billing.address.state'
                  >
                    <option value='billing.state'>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div class='items-center flex inset-y-0 right-0 px-2 pointer-events-none absolute text-gray-700'>
                    <svg
                      class='fill-current h-4 w-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                  </div>
                </div>
              </div>
              <div class='mb-6 px-3 w-full md:w-1/3 md:mb-0'>
                <label
                  class='block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase'
                  for='grid-zip'
                >
                  Zip
                </label>

                <Field
                  class='appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight focus:outline-none py-3 px-4 text-gray-700 w-full'
                  name='billing.address.postal_code'
                  placeholder='Zip'
                  type='input'
                />
              </div>
            </div>
            <div>
              <Field type='checkbox' name='sameAsShipping' />
            </div>
            <div
              class={`flex flex-wrap -mx-3 mb-6 ${
                values.sameAsShipping ? 'hidden' : ''
              }`}
            >
              <hr className='border-t-2' />

              <div class='px-3 w-full md:w-1/2'>
                <label
                  class='block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase'
                  for='grid-last-name'
                >
                  Name
                </label>

                <Field
                  class='appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight focus:outline-none py-3 px-4 text-gray-700 w-full'
                  name='shipping.name'
                  placeholder='Last Name'
                  type='input'
                />
              </div>
              <div class='flex -mx-3 mb-6'>
                <div class='px-3 w-full'>
                  <label
                    class='block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase'
                    for='grid-password'
                  >
                    Address Line 1
                  </label>
                  <Field
                    class='appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight mb-3 focus:outline-none py-3 px-4 text-gray-700'
                    id='grid-email'
                    type='input'
                    name='shipping.address.line1'
                    placeholder='Address Line 1'
                  />
                </div>
                <div class='px-3 w-full'>
                  <label
                    class='block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase'
                    for='grid-password'
                  >
                    Address Line 2
                  </label>
                  <Field
                    class='appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight mb-3 focus:outline-none py-3 px-4 text-gray-700'
                    id='grid-email'
                    type='input'
                    name='shipping.address.line2'
                    placeholder='Address Line 2'
                  />
                </div>
              </div>
              <div class='flex flex-wrap -mx-3 mb-2'>
                <div class='mb-6 px-3 w-full md:w-1/3 md:mb-0'>
                  <label
                    class='block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase'
                    for='grid-city'
                  >
                    City
                  </label>

                  <Field
                    class='appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight focus:outline-none py-3 px-4 text-gray-700 w-full'
                    name='shipping.address.city'
                    placeholder='City'
                    type='input'
                  />
                </div>
                <div class='mb-6 px-3 w-full md:w-1/3 md:mb-0'>
                  <label
                    class='block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase'
                    for='grid-state'
                  >
                    State
                  </label>
                  <div class='relative'>
                    <select
                      as='select'
                      class='appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight focus:outline-none py-3 px-4 pr-8 text-gray-700 w-full'
                      id='grid-state'
                      name='shipping.address.state'
                    >
                      <option value='billing.state'>New Mexico</option>
                      <option>Missouri</option>
                      <option>Texas</option>
                    </select>
                    <div class='items-center flex inset-y-0 right-0 px-2 pointer-events-none absolute text-gray-700'>
                      <svg
                        class='fill-current h-4 w-4'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                      >
                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class='mb-6 px-3 w-full md:w-1/3 md:mb-0'>
                  <label
                    class='block text-xs font-bold tracking-wide mb-2 text-gray-700 uppercase'
                    for='grid-zip'
                  >
                    Zip
                  </label>

                  <Field
                    class='appearance-none focus:bg-white bg-gray-200 border-gray-200 focus:border-gray-500 rounded border block leading-tight focus:outline-none py-3 px-4 text-gray-700 w-full'
                    name='shipping.address.postal_code'
                    placeholder='Zip'
                    type='input'
                  />
                </div>
              </div>
            </div>
            <div>
              <CardElement />
            </div>

            <button
              type='submit'
              disabled={isSubmitting || !stripe}
              class='bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2  border rounded-full'
            >
              <span class='mx-auto'>Place Order</span>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutForm;
