"use client";
import React, { Fragment } from "react";
import ReactDom from "react-dom";
import useCart from "./(store)/store";
import { useRouter } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Modal: React.FC = () => {
  const closeModal = useCart((state) => state.setOpenModal);
  const removeProduct = useCart((state) => state.removeItemFromCart);
  const increaseQuantity = useCart((state) => state.increaseQuantity);
  const decreaseQuantity = useCart((state) => state.decreaseQuantity);
  const modalState = useCart((state) => state.openModal);
  const cartItems = useCart((state) => state.cart);
  const totalPrice = useCart((state) => state.totalPrice);
  const router = useRouter();

  const checkout = async () => {
    const lineItems = cartItems.map((cartItem) => {
      return {
        price: cartItem.price_id,
        quantity: cartItem.quantity,
      };
    });
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lineItems }),
    });
    const data = await res.json();
    router.push(data.session.url);
  };

  return ReactDom.createPortal(
    <Transition.Root show={modalState} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full">
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={closeModal}>
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200">
                            {cartItems.map((cartItem, itemIndex) => (
                              <li key={itemIndex} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={cartItem.productInfo.images[0]}
                                    alt={cartItem.name}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <Link href={"#"}>{cartItem.name}</Link>
                                      </h3>
                                      <p className="ml-4">
                                        $
                                        {cartItem.cost
                                          ? cartItem.cost / 100
                                          : "No price"}
                                      </p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      Quantity {cartItem.quantity}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="flex">
                                      <button
                                        type="button"
                                        onClick={() => {
                                          decreaseQuantity(cartItem);
                                        }}
                                        className="text-gray-500 hover:text-gray-900">
                                        -
                                      </button>
                                      <p className="text-gray-500 px-3">
                                        Quantity
                                      </p>
                                      <button
                                        type="button"
                                        onClick={() => {
                                          increaseQuantity(cartItem);
                                        }}
                                        className="text-gray-500 hover:text-gray-900">
                                        +
                                      </button>
                                    </div>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        onClick={() => {
                                          removeProduct(cartItem, itemIndex);
                                        }}
                                        className="font-medium text-gray-900 hover:underline">
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${totalPrice}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <button
                          onClick={checkout}
                          className="flex items-center justify-center rounded-md border border-gray-900 bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-white hover:text-gray-900">
                          Checkout
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or&nbsp;
                          <button
                            type="button"
                            className="font-medium text-gray-900 hover:underline"
                            onClick={closeModal}>
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>,
    document.getElementById("portal")
  );
};

export default Modal;
