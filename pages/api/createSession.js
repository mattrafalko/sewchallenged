import Stripe from 'stripe';

export default async (req, res) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET);
  const { total, items, data } = req.body;

  const lineItems = items.map((item) => ({
    price: item.priceId,
    quantity: item.qty,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [...lineItems],
      customer_email: data.email,
      shipping_address_collection: { allowed_countries: ['US'] }, // ['US'], //{ ...data.shipping.address },
      mode: 'payment',
      success_url: 'https://sewchallenged-nxgey5oq2.now.sh/',
      cancel_url: 'https://sewchallenged-nxgey5oq2.now.sh/',
    });

    res.status(200).json(session);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
