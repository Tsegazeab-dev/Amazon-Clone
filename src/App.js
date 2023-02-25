import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { UseStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import UseReducer from "./UseReducer";
import Payment from "./components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/orders/Orders";

const promise = loadStripe(
  process.env.REACT_APP_Product_Key
);

function App() {
  const [{}, dispatch] = UseStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Home />
            </div>
          }
        />
        <Route
          path="/checkout"
          element={
            <div>
              <Header />
              <Checkout />
            </div>
          }
        />
        <Route path="/log-in" element={<Login />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise} >
              <Payment />
            </Elements>
          }
        />
         <Route
          path="/orders"
          element={
            <div>
              <Header />
              <Orders/>
            </div>
          }
        />
        {/* <Route path="/reducer" element={<UseReducer />} /> */}
      </Routes>
    </div>
  );
}

export default App;
