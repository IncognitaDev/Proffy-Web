import React from 'react';

import './styles.css'

const NavHeader: React.FC = (props) => {
  return (
    <nav className='nav-header'>
      <div className='nav-header-content'>
        {props.children}
        
      </div>
    </nav>
  );
}

export default NavHeader;