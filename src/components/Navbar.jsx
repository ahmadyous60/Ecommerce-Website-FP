import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { items } from './Data';
import {FaCartArrowDown  } from 'react-icons/fa';

const Navbar = ({ setData, cart }) => {
  const location = useLocation(); // Correct usage of the useLocation hook
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filterByCategory = (category) => {
    const filteredItems = items.filter((product) => product.category === category);
    setData(filteredItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm('');
  };

  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to="/" className="logo">
            <img src={logo} alt="E-Cart Logo" className="logo-img" />
          </Link>

          <form onSubmit={handleSubmit} className="search-bar">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search Products"
            />
          </form>
          <Link to="/cart" className="cart">
            <button type="button" className="btn btn-primary position-relative">
            <FaCartArrowDown/>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>
        {location.pathname === '/' && (
          <div className="nav-bar-wrapper">
            <div onClick={() => filterByCategory('Mobiles')} className="items">Mobiles</div>
            <div onClick={() => filterByCategory('Laptops')} className="items">Laptops</div>
            <div onClick={() => filterByCategory('Gadgets')} className="items">Gadgets</div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
