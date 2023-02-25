import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { UseStateValue } from '../../StateProvider';
import { auth } from '../../firebase';
function Header() {
    const[{basket, user}, dispatch] = UseStateValue();
    const handleAuthentication = ()=>{
        if(user) auth.signOut();
    };
  return (
    <div className='header'>
        <Link to="/">
        <img className="header__logo" 
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
        alt="" />
        </Link>
        <div className='header__search'>
            <input className='header__searchInput' type="text" />
            <SearchIcon className="header__searchIcon"/>
        </div>
        <div className='header__nav'>
            <div className='header__option'>
                <span className='header__optionOne'>Hello {!user ? 'Guest': user.email}</span>
                <Link className='header__clearlink' to={!user && '/log-in'}><span className='header__optionTwo' onClick={handleAuthentication}>{!user ? 'Sign In': 'Sign Out'}</span></Link>
                
            </div>
            <Link to='/orders' className='header__clearlink'>
            <div className='header__option'>
                <span className='header__optionOne'>Returns</span>
                <span className='header__optionTwo'>& Orders</span>
            </div>
            </Link>
            <div className='header__option'>
                <span className='header__optionOne'>Your</span>
                <span className='header__optionTwo'>Prime</span>
            </div>
            <Link to='/checkout' className='header__clearlink'>
            <div className='header__optionBasket'>
            <ShoppingBasketIcon/>
            <span className='header__optionTwo header__basketCount '>{basket.length}</span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header;