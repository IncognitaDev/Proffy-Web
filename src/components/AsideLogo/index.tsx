import React from 'react';

import Logo from '../../assets/images/logo.svg'

import './styles.css';

const AsideLogo: React.FC = () => {
  return (
    <div className='aside-page'>
      <div className='aside-content'>
        <img src={Logo} alt='Proffy'/>
      </div>
    </div>
  );
}

export default AsideLogo;