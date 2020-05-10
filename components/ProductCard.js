import React from "react";
import scrollToTop from "../Utils";

const ProductCard = (props) => {
  const { item } = props;

  return (
    <div
      className="card lg:max-w-sm lg:mx-4"
      onClick={() => {
        props.handleSelection(item.id);
        scrollToTop();
      }}
    >
      <div className="flex-shrink-0">
        <img
          className="h-64 w-full object-cover"
          src={item.data.image.url}
          alt={item.data.description[0].text}
        />
      </div>

      <div className="cardBody">
        <div>
          <div className="font-bold text-xl mb-2">
            {item.data.description[0].text}
          </div>
        </div>
      </div>
      <div className="px-6 py-4 flex justify-start">
        <span>${item.data.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
