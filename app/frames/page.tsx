import Stripe from "stripe";
import ProductCard from "./ProductCard";

const getStripeProducts = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
    apiVersion: "2022-11-15",
  });
  const res = await stripe.prices.list({
    expand: ["data.product"],
  });
  const prices = res.data;
  return prices;
};

export default async function Store() {
  const products = await getStripeProducts();
  return (
    <div className="m-auto max-w-screen-xl">
      <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 mt-10 mb-20 sm:text-6xl">
        Frames
      </h1>
      <div className="grid gap-x-6 grid-cols-1 p-4 2xl:p-0 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product, productIndex) => {
          return <ProductCard key={productIndex} product={product} />;
        })}
      </div>
    </div>
  );
}
