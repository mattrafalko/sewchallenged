import React from "react";

const SelectedProductCard = (props) => {
  const { item } = props;
  return (
    <div class="w-full  lg:flex">
      <div
        class=" max-h-full lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ "background-image": `url(${item.data.image.url})` }}
      ></div>
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-2">
            Can coffee make you a better developer?
          </div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="flex items-center">
          <div class="text-sm">
            <p class="text-gray-900 leading-none">${item.data.price}</p>
            <p class="text-gray-600">Aug 18</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProductCard;
