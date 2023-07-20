"use client";
import Link from "next/link";
import React, { useState } from "react";
import useCart from "./(store)/store";
import Modal from "./Modal";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

interface Props {
  navigation: {
    name: string;
    href: string;
  }[];
}

const Header: React.FC<Props> = ({ navigation }) => {
  const cartItems = useCart((state) => state.cart);
  const openModal = useCart((state) => state.openModal);
  const setOpenModal = useCart((state) => state.setOpenModal);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-50">
      {openModal && <Modal />}
      <nav
        className="flex items-center justify-between p-6 max-w-screen-xl m-auto lg:px-8"
        aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href={"/"} className="flex -m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 mr-3 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Glasses
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <div
            className="flex text-sm font-semibold leading-6 text-gray-900 cursor-pointer mr-5"
            onClick={setOpenModal}>
            {cartItems.length > 0 && (
              <div className="absolute top-6 right-14.5 aspect-square h-5 sm:h-6 pointer-events-none grid place-items-center bg-slate-900 text-white rounded-full -translate-y-1/2 translate-x-1/2">
                <p className="text-xs sm:text-sm">{cartItems.length}</p>
              </div>
            )}
            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
          </div>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </Link>
          ))}
        </div>
        <div
          className="hidden lg:flex lg:flex-1 lg:justify-end text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
          onClick={setOpenModal}>
          Cart
          <span className="ml-2">
            {cartItems.length > 0 && (
              <div className="absolute top-6 right-6.5 aspect-square h-5 sm:h-6 pointer-events-none grid place-items-center bg-blue-400 text-white rounded-full -translate-y-1/2 translate-x-1/2">
                <p className="text-xs sm:text-sm">{cartItems.length}</p>
              </div>
            )}
            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
          </span>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href={"/"}
              onClick={() => setMobileMenuOpen(false)}
              className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
