import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { UseStateValue } from "../../StateProvider";
import Order from "../order/Order";
import "./Orders.css";

function Orders() {
  const [{ basket, user }, dispatch] = UseStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(()=>{
    if(user) {
      db.collection('users')
      .doc(user?.uid)
      .collection('orders')
      .orderBy('created', 'desc')
      .onSnapshot((snapshot)=> 
      setOrders(
        snapshot.docs.map((doc)=>({
          id: doc.id,
          data: doc.data(),
        }))
      )
      );
    } else {
      setOrders([]);
    }
  },[user]);

console.log(user);
console.log(orders);
  return (
    <div className="orders">
      <h3>Your Orders</h3>
      <div className="orders__order">
        {
          orders?.map((order)=>(
            <Order order={order} />
          ))
        }
      </div>
    </div>
  );
}

export default Orders;
