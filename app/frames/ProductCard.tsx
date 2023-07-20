"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Stripe from "stripe";
import useCart from "../(store)/store";

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
    const selectedProduct = {
      price_id,
      name,
      description,
      cost,
      productInfo,
    };
    setProduct(selectedProduct);
    router.push("/frames/frame?price_id=" + price_id);
  };
  return (
    <div onClick={onProductClick} className="mb-6 shadow-md cursor-pointer">
      <div className="">
        <img src={productInfo.images[0]} alt={name} className="w-full" />
      </div>
      <div className="flex flex-col gap-y-1 text-center p-6 text-lg font-medium">
        <h3 className="text-gray-900">{name}</h3>
        <p className="text-gray-500">${cost ? cost / 100 : "No price"}</p>
      </div>
    </div>
  );
};

export default ProductCard;
