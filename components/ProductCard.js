import React from "react";

const ProductCard = (props) => {
  const { item } = props;

  return (
    <div
      className="max-w-xl rounded overflow-hidden shadow-lg"
      onClick={() => props.handleSelection(item.id)}
    >
      <img
        className="w-full"
        src={item.data.image.url}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {item.data.description[0].text}
        </div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #winter
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
