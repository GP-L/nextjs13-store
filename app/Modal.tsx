"use client";
import React from "react";
import ReactDom from "react-dom";
import useCart from "./(store)/store";
import { useRouter } from "next/navigation";

const Modal: React.FC = () => {
  const closeModal = useCart((state) => state.setOpenModal);
  const cartItems = useCart((state) => state.cart);
  const router = useRouter();

  const checkout = async () => {
    const lineItems = cartItems.map((cartItem) => {
      return {
        price: cartItem.price_id,
        quantity: 1,
      };
    });
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ lineItems }),
    });
    const data = await res.json();
    router.push(data.session.url);
  };

  return ReactDom.createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen z-50">
      <div
        onClick={closeModal}
        className="bg-transparent absolute inset-0"></div>
      <div className="flex flex-col bg-white absolute right-0 top-0 h-screen shadow-lg w-screen sm:w-96 max-w-screen gap-4">
        <div className="flex items-center justify-between p-4 text-xl relative">
          <h1>Cart</h1>
          <i
            onClick={closeModal}
            className="fa-solid fa-xmark cursor-pointer hover:opacity-60"></i>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-slate-300 w-2/3"></div>
        </div>
        <div className="ml-5 p-4 overflow-scroll flex-1 flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <p>There is nothing in your cart</p>
          ) : (
            <>
              {cartItems.map((cartItem, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="flex flex-col gap-2 border-l border-solid border-slate-700 px-2">
                    <div className="flex items-center justify-between">
                      <h2>{cartItem.name}</h2>
                      {cartItem.cost ? (
                        <p>${cartItem.cost / 100}</p>
                      ) : (
                        <p>No price</p>
                      )}
                    </div>
                    <p className="text-slate-600 text-sm">Quantity: 1</p>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div
          onClick={checkout}
          className="border border-slate-950 text-xl m-4 p-6 uppercase grid place-items-center rounded-md font-semibold hover:bg-black hover:text-white hover:border-black cursor-pointer">
          Checkout
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
