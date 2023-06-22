import Stripe from "stripe";

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
  console.log(products);
  return <main className="p-4"></main>;
}
