import React from 'react';
import scrollToTop from '../Utils';

const ProductCard = ({ item, handleSelection }) => {
  return (
    <div
      className='card lg:max-w-sm lg:mx-4'
      onClick={() => {
        handleSelection(item.id);
        scrollToTop();
      }}
    >
      <div className='flex-shrink-0'>
        <img
          className='h-64 w-full object-cover'
          src={item.images[0]}
          alt={item.description}
        />
      </div>

      <div className='cardBody'>
        <div>
          <div className='font-bold text-xl mb-2'>{item.name}</div>
        </div>
      </div>
      <div className='px-6 py-4 flex justify-start'>
        <span>${item.price / 100}</span>
      </div>
    </div>
  );
};

export default ProductCard;
