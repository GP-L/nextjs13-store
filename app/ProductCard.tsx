"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Stripe from "stripe";
import useCart from "./(store)/store";

interface Props {
  product: Stripe.Price;
}

const ProductCard: React.FC<Props> = (props) => {
  const { product } = props;
  const { id: price_id, unit_amount: cost, product: productInfo } = product;
  const { name, description } = productInfo;

  const setProduct = useCart((state) => state.setProduct);

  const router = useRouter();

  const onProductClick = () => {
    const newProduct = {
      name,
      description,
      price_id,
      cost,
      productInfo,
    };
    setProduct({ newProduct });
    router.push("/product?price_id=" + price_id);
  };
  return (
    <div
      onClick={onProductClick}
      className="mb-6 flex overflow-hidden rounded-md shadow-md cursor-pointer">
      <div className="relative w-48 flex-none">
        <img
          src={productInfo.images[0]}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-wrap p-6">
          <h3 className="flex-auto text-lg font-semibold text-slate-900">
            {name}
          </h3>
          <p className="text-lg font-semibold text-slate-500">${cost / 100}</p>
          <p className="mt-2 w-full flex-none text-sm font-medium text-slate-700">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
