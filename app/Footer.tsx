import Link from "next/link";
import React from "react";

interface Props {
  navigation: {
    name: string;
    href: string;
  }[];
}

const Footer: React.FC<Props> = ({ navigation }) => {
  return (
    <footer className="bg-gray-200 z-50">
      <div className="w-full p-4 max-w-screen-xl m-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href={"/"} className="flex items-center mb-4 sm:mb-0">
            <img
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 mr-3"
              alt=""
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Glasses
            </span>
          </Link>
          <div className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-700 sm:mb-0">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="mr-4 md:mr-6">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-700 sm:text-center">
          © 2023 Glasses™. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
