"use client";
import useCart from "../(store)/store";

interface Props {
  searchParams: String;
}

export default function ProductPage(props: Props) {
  const { searchParams } = props;
  const { price_id } = searchParams;
  const product = useCart((state) => state.product);
  const addItemToCart = useCart((state) => state.addItemToCart);
  const { cost, productInfo, name, description } = product;
  console.log(product);

  if (!product?.name) {
    window.location.href = "/";
  }

  const handleAddToCart = () => {
    const newItem = {
      quantity: 1,
      price_id,
      name,
      cost,
    };
    addItemToCart({ newItem });
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
        <div className="flex flex-col">
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
            <button
              onClick={handleAddToCart}
              className="h-10 mt-10 rounded-md bg-black px-6 font-semibold text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
