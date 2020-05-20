import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET);

export default async (req, res) => {
  const { id, amount, description } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "USD",
      amount: amount,
      description: description,
      payment_method: id,
      confirm: true,
    });

    return res.status(200).json({
      paymentIntent,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};