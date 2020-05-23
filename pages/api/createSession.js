import Stripe from 'stripe';

export default async (req, res) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET);
  const { id, amount, description, billing, shipping } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: 'price_HKSxj5iS24DFRv',
          quantity: 2,
        },
      ],
      mode: 'payment',
      success_url: 'https://sewchallenged-nxgey5oq2.now.sh/',
      cancel_url: 'https://sewchallenged-nxgey5oq2.now.sh/',
    });

    res.json(session);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};
