import { Elements } from "@stripe/react-stripe-js";
import ChekOut from "./ChekOut";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PK);
const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };
const Payment = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className="p-6 max-w-md bg-white rounded shadow">
          <h2 className="text-2xl font-bold mb-4 text-center">Make a Payment</h2>
      <div>
      <Elements stripe={stripePromise} options={options}>
  <ChekOut></ChekOut>
    </Elements>
      </div>
         
        </div>
      </div>
    );
};

export default Payment;