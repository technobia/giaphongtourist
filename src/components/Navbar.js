import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';

const Navbar = () => (
  <header id='navigationmenu' className='fade-down animate2 navigationmenulight'>

    <div className='container'>

      <div className='grid_12 gridnavigation'>

        <Link to="/">
          <img className='logo fade-up animate1' alt='' src={Logo} height={43} />
        </Link>

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
              <Link to='/tour'><strong>TOUR</strong></Link>
            </li>

            {/*<li className='green'>*/}
              {/*<span className='menufilter'></span>*/}
              {/*<Link to='/lien-he'><strong>LIÊN HỆ</strong></Link>*/}
            {/*</li>*/}

          </ul>

      </div>

    </div>

  </header>
);

export default Navbar;
