import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import "./CheckoutProduct.css"
import { UseStateValue } from '../../StateProvider';
function CheckOutProduct({id, title, price, rating, image, hideButton}) {
    const[{basket}, dispatch] = UseStateValue();
    const removeFromBasket = ()=>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        });
    }
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__img'
        src={image} 
        alt="" />
        <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct__rating'>
                {Array(rating)
                .fill()
                .map(()=>(
                    <StarIcon className='star' />
                    
                ))}
                
            </div>
            <button onClick={removeFromBasket} className={hideButton && 'checkoutProduct__hideButton'}> Remove from Basket</button>
            </div>
            
    </div>
  )
}

export default CheckOutProduct;