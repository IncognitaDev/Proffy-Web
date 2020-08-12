import React from 'react';

import './styles.css';

interface ButtonProps {
  name?: string
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className='submit-button' type='submit'>
      {props.children}
    </button>
  );
}

export default Button;