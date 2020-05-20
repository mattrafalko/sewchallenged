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
    <div className="flex flex-wrap md:flex-no-wrap">
      <div className="">
        <img className="object-cover" src={item.data.image.url} />
      </div>

      <div className="p-4 flex flex-col justify-between">
        <div className="">
          <div className="text-gray-900 font-extrabold tracking-wide text-3xl">
            {item.data.description[0].text}
          </div>
          <p className="text-gray-700 tracking-tight leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>

        <div className="p-2 flex flex-col justify-around ">
          <div>
            <span className="text-gray-900 text-xl md:text-2xl font-bold">
              ${item.data.price}
            </span>
          </div>

          <div className="flex items-center justify-between sm:px-8 mt-5 md:mt-12">
            <button className="select-none" onClick={() => decrementQty()}>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm-6.5 10h13v1h-13v-1z" />
              </svg>
            </button>
            <span className="text-xl">{qty}</span>
            <button className="select-none" onClick={() => incrementQty()}>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z" />
              </svg>
            </button>
          </div>

          <div className="mt-6 md:mt-12 w-full flex items-center justify-center">
            <button
              className={` ${
                qty === 0 ? "disabled:opacity-75" : ""
              } select-none`}
              disabled={qty === 0 ? "disabled" : null}
              onClick={() => addToCart(item.id, qty)}
            >
              <span className="text-xl font-bold bg-gray-300 rounded-full px-4 py-3 ">
                Add to Cart
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProductCard;
