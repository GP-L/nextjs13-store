import Stripe from "stripe";
import ProductCard from "./ProductCard";

const getStripeProducts = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
    apiVersion: "2022-11-15",
  });
  const res = await stripe.prices.list({
    expand: ["data.product"],
    limit: 100,
  });
  const prices = res.data;
  return prices;
};

export default async function Store() {
  const products = await getStripeProducts();
  return (
    <div>
      <div className="flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1616052286111-4bc3dd04ad29?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-black bg-opacity-30 bg-blend-overlay max-w-none min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Frames
        </h1>
      </div>
      <div className="max-w-screen-xl m-auto grid gap-6 grid-cols-1 my-10 px-4 xl:px-0 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product, productIndex) => {
          return <ProductCard key={productIndex} product={product} />;
        })}
      </div>
    </div>
  );
}
