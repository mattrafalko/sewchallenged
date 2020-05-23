import React, { useState } from 'react';

const SelectedProductCard = ({ item, addToCart }) => {
  const [qty, setQty] = useState(1);

  const incrementQty = () => {
    let newQty = qty + 1;
    setQty(newQty);
  };

  const decrementQty = () => {
    let newQty = qty === 0 ? qty : qty - 1;
    setQty(newQty);
  };

  return (
    <div className='flex flex-wrap lg:flex-no-wrap items-center '>
      <div className='relative rounded overflow-hidden '>
        <img className=' absoulte h-full w-full' src={item.images[0]} />
      </div>

      <div className='w-full lg:h-full flex my-2 lg:my-0 lg:mx-2 '>
        <div className='p-4 min-w-full flex flex-col rounded shadow-inner justify-between bg-gray-200'>
          <div className=''>
            <div className='text-gray-900 font-semibold tracking-wide text-3xl'>
              {item.name}
            </div>
            <p className='text-gray-700 tracking-tight leading-tight'>
              {item.description}
            </p>
          </div>

          <div className='p-2 flex mt-6 flex-col justify-between'>
            <div>
              <span className='text-gray-900 text-2xl md:text-2xl font-bold'>
                ${item.price / 100}
              </span>
            </div>

            <div className=' mt-12 flex inline-flex items-center justify-around'>
              <button
                className='select-none rounded-full w-10 '
                onClick={() => decrementQty()}
              >
                <svg
                  width='auto'
                  height='auto'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z'
                    fill='currentColor'
                  />
                </svg>
              </button>
              <span className='text-3xl w-3'>{qty}</span>
              <button
                className='select-none rounded-full w-10 '
                onClick={() => incrementQty()}
              >
                <svg
                  width='auto'
                  height='auto'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z'
                    fill='currentColor'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z'
                    fill='currentColor'
                  />
                </svg>
              </button>
            </div>

            <div className='mt-12 w-full flex items-center w-full'>
              <button
                className={` ${
                  qty === 0 ? 'cursor-not-allowed' : ''
                }  addToCartButton shadow-md w-full font-extrabold  `}
                disabled={qty === 0 ? 'disabled' : null}
                onClick={() => addToCart(item.id, qty)}
              >
                <span className=''>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProductCard;
