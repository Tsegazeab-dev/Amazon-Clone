import React from 'react'
import { UseStateValue } from '../../StateProvider';
import CheckOutProduct from '../CheckOutProduct/CheckOutProduct';
import Subtotal from '../subtotal/Subtotal';
import "./Checkout.css"
function Checkout() {
  const[{basket, user}, dispatch] = UseStateValue();
  return (
    <div className='checkout'>
        <div className='checkout__left'>
          <div className='checkout__img'>
            <img 
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
          
          </div>
          
          <h3>Hello {!user ? 'Guest' : user.email}</h3>
          <h2 className='checkout__title'>Your shopping basket</h2>
          {basket?.map((item)=>(
            <CheckOutProduct 
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
          ))}
        </div>
        <div className='checkout__right'>
          <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout;