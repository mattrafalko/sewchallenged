import React from "react";

const ProductCard = (props) => {
  const { item } = props;

  return (
    <div
      className="max-w-sm w-full lg:max-w-full lg:flex mb-4 hover:shadow-lg"
      onClick={() => props.handleSelection(item.id)}
    >
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ "background-image": `url(${item.data.image.url})` }}
        title="Woman holding a mug"
      ></div>
      <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {item.data.description[0].text}
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 leading-none">${item.data.price}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
