import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';


function Header() {
    return (
        <nav className="header">
            {/* logo on the left */}
            <Link to="/checkout">
                <img className="header_logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1250%2F3061%2Ffiles%2Fwhite-amazon-logo-png-6_1024x1024.png%3Fv%3D1539106025&f=1&nofb=1" alt="amazon logo" />
            </Link>

            {/* search-box */}
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>
            {/* 3 links */}
            <div className="header_nav">

            </div>

            {/* basket icon with number */}
        </nav>
    )
}

export default Header
