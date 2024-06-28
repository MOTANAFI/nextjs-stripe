'use client'
import { useStripe, usesElements, PaymentElement, useElements } from "@stripe/react-stripe-js"
import { useState } from "react";

function CheckoutPage({amount}) {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage ,setErrorMessage] = useState();
    const [clientSecret, setClientSecret] = useState();
    const [loading, setLoading] = useState(false);
  return (
    <div>CheckoutPage</div>
  )
}

export default CheckoutPage