import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(req: Request) {
  const body = await req.json();
  if (body.lineItems.length === 0) {
    return new Response("Error", {
      status: 405,
    });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
      apiVersion: "2022-11-15",
    });

    const session = stripe.checkout.sessions.create({
      success_url: "https://localhost:3000/success",
      cancel_url: "https://localhost:3000/cancel",
      line_items: body.line_items,
      mode: "payment",
    });
    return NextResponse.json(session);
  } catch (error) {
    console.log(error);
    return new Response("Error", {
      status: 405,
    });
  }
}
