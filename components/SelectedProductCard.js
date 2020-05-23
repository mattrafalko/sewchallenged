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
    <div className='flex flex-wrap md:flex-no-wrap max-w-full'>
      <div className='rounded-lg overflow-hidden'>
        <img
          className=' w-full h-full object-cover '
          src={item.data.image.url}
        />
      </div>
      <div className='p-4 flex flex-col justify-between'>
        <div className=''>
          <div className='text-gray-900 font-extrabold tracking-wide text-3xl'>
            {item.data.description[0].text}
          </div>
          <p className='text-gray-700 tracking-tight leading-tight'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>

        <div className='p-2 flex flex-col justify-around my-auto'>
          <div>
            <span className='text-gray-900 text-xl md:text-2xl font-bold'>
              ${item.data.price}
            </span>
          </div>

          <div className='flex items-center sm:px-8 mt-5 md:mt-12 justify-between  '>
            <button className='select-none' onClick={() => decrementQty()}>
              <svg
                width='24'
                height='24'
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
            <span className='text-xl'>{qty}</span>
            <button className='select-none' onClick={() => incrementQty()}>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z'
                  fill='currentColor'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z'
                  fill='currentColor'
                />
              </svg>
            </button>
          </div>

          <div className='mt-6 md:mt-12 w-full flex items-center justify-center'>
            <button
              className={` ${
                qty === 0 ? 'cursor-not-allowed' : ''
              } select-none text-xl font-bold bg-gray-400 rounded-full px-4 py-3 `}
              disabled={qty === 0 ? 'disabled' : null}
              onClick={() => addToCart(item.id, qty)}
            >
              <span className=''>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProductCard;
