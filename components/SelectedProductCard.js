import React from "react";

const SelectedProductCard = (props) => {
  const { item } = props;
  return (
    <div class="selectedProductCard lg:max-w-xl mx-auto ">
      <div class="flex-shrink-0">
        <img className="w-full object-cover" src={item.data.image.url} />
      </div>

      <div class="p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-2">
            {item.data.description[0].text}
          </div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="p-2 flex justify-around">
          <p class="text-gray-900 text-xl">${item.data.price}</p>
          <button className="addToCartButton">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SelectedProductCard;
