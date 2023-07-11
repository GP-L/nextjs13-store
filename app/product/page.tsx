"use client";
import React from "react";
import useCart from "../(store)/store";
import { Dropdown } from "@nextui-org/react";

interface Props {
  searchParams: string;
}

export default function ProductPage(props: Props) {
  const [selected, setSelected] = React.useState(new Set(["1"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  const { searchParams } = props;
  const { price_id } = searchParams;
  const product = useCart((state) => state.product);
  const addItemToCart = useCart((state) => state.addItemToCart);
  const { cost, productInfo, name, description } = product;

  if (!product?.name) {
    window.location.href = "/";
  }

  const handleAddToCart = (selectedQuantity: string) => {
    const quantity = Number(selectedQuantity);
    const selectedProduct = {
      price_id,
      name,
      description,
      cost,
      quantity: quantity,
      productInfo,
    };
    addItemToCart(selectedProduct);
  };

  return (
    <div className="flex flex-col p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
        <div className="md:p-2">
          <img
            src={productInfo.images[0]}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-wrap p-6">
          <h3 className="flex-auto text-4xl font-semibold text-slate-900">
            {name}
          </h3>
          {cost ? (
            <p className="text-2xl mt-1.5 font-semibold text-slate-500">
              ${cost / 100}
            </p>
          ) : (
            <p className="text-lg font-semibold text-slate-500">No price</p>
          )}
          <p className="mt-10 w-full flex-none text-lg font-medium text-slate-700">
            {description}
          </p>
          <div className="flex items-center mt-10">
            <Dropdown>
              <Dropdown.Button flat color="primary">
                Quantity {selectedValue}
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Single selection actions"
                color="primary"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={setSelected}>
                <Dropdown.Item key="1">1</Dropdown.Item>
                <Dropdown.Item key="2">2</Dropdown.Item>
                <Dropdown.Item key="3">3</Dropdown.Item>
                <Dropdown.Item key="4">4</Dropdown.Item>
                <Dropdown.Item key="5">5</Dropdown.Item>
                <Dropdown.Item key="6">6</Dropdown.Item>
                <Dropdown.Item key="7">7</Dropdown.Item>
                <Dropdown.Item key="8">8</Dropdown.Item>
                <Dropdown.Item key="9">9</Dropdown.Item>
                <Dropdown.Item key="10">10</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <button
              onClick={() => handleAddToCart(selectedValue)}
              className="h-10 ml-5 rounded-xl bg-black px-6 font-semibold text-white hover:bg-white hover:text-black hover:border hover:border-2 hover:border-solid hover:border-black">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
