import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {

    const [{ basket }] = useStateValue();

    return (
        <nav className="header">
            {/* logo on the left */}
            <Link to="/">
                <img className="header_logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1250%2F3061%2Ffiles%2Fwhite-amazon-logo-png-6_1024x1024.png%3Fv%3D1539106025&f=1&nofb=1" alt="amazon logo" />
            </Link>

            {/* search-box */}
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>
            {/* 3 links */}
            <div className="header_nav">

                {/* 1st link */}
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_op_one" >Hello Mustafiz</span>
                        <span className="header_op_two" >Sign In</span>
                    </div>
                </Link>
                {/* 2nd link */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_op_one" >Returns </span>
                        <span className="header_op_two" >& Orders</span>
                    </div>
                </Link>
                {/* 3rd link */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_op_one" >Your</span>
                        <span className="header_op_two" >Prime</span>
                    </div>
                </Link>
                {/* 4th link */}
                <Link to="/checkout" className="header_link">
                    <div className="header_option_basket">
                        <ShoppingBasketIcon />
                        <span className="header_op_two header_basket_count" >{basket.length}</span>
                    </div>
                </Link>
            </div>

            {/* basket icon with number */}
            <div className="">
            </div>
        </nav>
    )
}

export default Header
