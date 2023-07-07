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

export default async function Home() {
  const products = await getStripeProducts();
  return (
    <main>
      <section className="m-auto max-w-[1140px] p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6">
          {products.map((product, productIndex) => {
            return <ProductCard key={productIndex} product={product} />;
          })}
        </div>
      </section>
    </main>
  );
}
