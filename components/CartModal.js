import React, { useContext } from "react";
import Modal from "react-modal";
import CartModalContext from "./CartModalContext";
import ShoppingCartContext from "./ShoppingCartContext";

const CartModal = () => {
  Modal.setAppElement("#__next");
  const { modalOpen, toggleModal } = useContext(CartModalContext);
  const { cart } = useContext(ShoppingCartContext);

  return (
    <div className="">
      <Modal isOpen={modalOpen} onRequestClose={() => toggleModal()}>
        <div className="flex justify-end">
          <button onClick={() => toggleModal()}>Close</button>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center h-full flex-1">
            {cart.cartItems.map((item) => (
              <div>
                <h3>Your SewChallenged Order</h3>
                <span>${cart.cartTotal}</span>

                <span>{item.data.name[0].text}</span>
                <span>{item.data.description[0].text}</span>
                <span>{item.data.price}</span>
                <span>{item.qty}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center h-full flex-1">FORM</div>
        </div>
      </Modal>
    </div>
  );
};

export default CartModal;
