import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useNavigate } from "react-router-dom";
import { UseStateValue } from "../../StateProvider";
import CheckOutProduct from "../CheckOutProduct/CheckOutProduct";
import "./Payment.css";
import axios from "../../axios";
import { db } from "../../firebase";

function Payment() {
  const [{ basket, user }, dispatch] = UseStateValue();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(()=>{
    const getClientSecret = async () =>{
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${Math.floor(getBasketTotal(basket)* 100)}`,
      });
      console.log(response);
      setClientSecret(response.data.clientSecret);
    };
  getClientSecret();
  }, [basket]);

  console.log('The secret is >>>', clientSecret);
  
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  const handleChange = (e) => {
    // e.empty is true when the card element is empty if someone types a number it become false
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    }).then(({ paymentIntent})=>{
      console.log(paymentIntent);
      db.collection('users')
      .doc(user?.uid)
      .collection('orders')
      .doc(paymentIntent.id)
      .set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });


      setSucceeded(true);
      setError(null);
      setProcessing(false);

      dispatch({
        type: 'EMPTY_BASKET',
      })

      navigate ('/orders')
    })

  };

  return (
    <div className="payment">
      <div className="payment__header">
        <h1>
          Checkout
          <Link className="link" to="/checkout">
            ({basket?.length} item)
          </Link>
        </h1>
      </div>
      <div className="payment__section">
        <div className="payment__title">
          <h3>Delivery Address</h3>
        </div>
        <div className="payment__address">
          <p>{user?.email}</p>
          <p>123 Evangadi</p>
          <p>Addis, Ethiopia</p>
        </div>
      </div>
      <div className="payment__section">
        <div className="payment__title">
          <h3>Review items and delivery</h3>
        </div>
        <div className="payment__items">
          {basket?.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="payment__section">
        <div className="payment__title">
          <h3>Payment Method</h3>
        </div>
        <div className="payment__details">
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <div className="payment__priceContainer">
              <CurrencyFormat
                renderText={(value) => <h3> Order Total : {value} </h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? "Processing" : "Buy Now"}</span>
              </button>
            </div>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
