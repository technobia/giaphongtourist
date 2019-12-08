import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';

const Navbar = () => (
  <header id='navigationmenu' className='fade-down animate1 navigationmenulight'>

    <div className='container'>

      <div className='grid_12 gridnavigation'>

        <img className='logo fade-up animate4' alt='' src={Logo} />

          <ul className='sf-menu' id='nav'>

            <li className='current yellow'>
              <span className='menufilter'></span>
              <Link to='/'><strong>TRANG CHỦ</strong></Link>
            </li>

            <li className='orange'>
              <span className='menufilter'></span>
              <Link to='/gioi-thieu'><strong>GIỚI THIỆU</strong></Link>
            </li>

            <li className='red'>
              <span className='menufilter'></span>
              <a href='#'><strong>TOUR</strong></a>
            </li>

            <li className='green'>
              <span className='menufilter'></span>
              <a href='#'><strong>LIÊN HỆ</strong></a>
            </li>

          </ul>

      </div>

    </div>

  </header>
);

export default Navbar;
