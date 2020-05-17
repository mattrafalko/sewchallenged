import React, { useState } from "react";

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
    <div className="selectedProductCard lg:max-w-xl mx-auto">
      <div className="flex-shrink-0">
        <img className="w-full object-cover" src={item.data.image.url} />
      </div>
      <div className="p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {item.data.description[0].text}
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="p-2 flex justify-around items-center">
          <p className="text-gray-900 text-xl">${item.data.price}</p>

          <button onClick={() => decrementQty()}>Less</button>
          <span>{qty}</span>
          <button onClick={() => incrementQty()}>More</button>
          <button
            className={`addToCartButton ${
              qty === 0 ? "disabled:opacity-75" : ""
            }`}
            disabled={qty === 0 ? "disabled" : null}
            onClick={() => addToCart(item.id, qty)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedProductCard;
