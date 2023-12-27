import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY as string, {
	apiVersion: "2022-11-15",
});
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;
  if (method === "POST") {
    const { user_id } = req.body;
    try {
      const customers = await stripe.customers.list({ limit: 100 });
    const customer = customers.data.find((c) => c.metadata.user_id === user_id) as Stripe.Customer;

    const portal = await stripe.billingPortal.sessions.create({
      customer: customer.id,
      return_url: `${process.env.PUBLIC_DOMAIN}/account`,
    })
    return res.status(200).json({ portal:portal.url });
    }
    catch (error) {
      const result = error as Error;
      if (error instanceof Error) return res.status(400).json({ message: error.message});
    }
  }

 
}


interface Data{
  portal?: string
  message?:string
}