'use client'
import CheckoutPage from "@/components/CheckoutPage";
import convertToSubcurrency from "@/lib/convertToSubCurrency";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

if(!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined){
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined")
}

const stripePromise = loadStripe(process.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
export default function Home() {
  const amount = 29.99
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Mohamed</h1>
        <h2 className="text-2xl">
          has requested
          <span className="font-bold"> ${amount}</span>
        </h2>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
      
    </main>
  );
}
