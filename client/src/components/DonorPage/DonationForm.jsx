import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// remember to add: npm install @stripe/react-stripe-js
// to readme


function DonationForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState('');
  const stripePromise = loadStripe('your_stripe_public_key');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      // Send the payment method ID and amount to your server
      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ payment_method_id: paymentMethod.id, amount })
      });

      const data = await response.json();
      console.log(data);
    }
  }

  return (
   <Elements stripe={stripePromise}>
   <form onSubmit={handleSubmit}>
      <label>
        Donation amount:
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>

      <label>
        Card details:
        <CardElement />
      </label>

      <button type="submit" disabled={!stripe}>
        Donate
      </button>
    </form>
    </Elements>
  );
}

export default DonationForm;
