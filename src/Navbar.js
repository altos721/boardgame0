import React from 'react';
import { Link } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>

      <ul>
        <li>
          <Link to='/' className='btn btn-dark'>
            編輯
          </Link>
        </li>
        {/* <li>
          <Link to='/test' className='btn btn-dark'>
            {'Test (C)'}
          </Link>
        </li> */}
        <li>
          <Link to='/test-human' className='btn btn-dark'>
            遊玩
          </Link>
        </li>
        <li>
          <Link to='/profile' className='btn btn-dark'>
            登入
          </Link>
        </li>
        <li>
          <Link to='/info'>
            <FaInfoCircle size={25} style={{ marginTop: '6px' }} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Card Games Maker',
  icon: 'fas fa-dice-d6',
};

export default Navbar;
