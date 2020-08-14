import React from 'react';

import CheckIcon from '../../assets/images/icons/success-check-icon.svg'
import './styles.css';
import Button from '../Button';

interface SuccessProps {
  title: string;
  description: string;
  button: string
}

const Success: React.FC<SuccessProps> = ({title, description, button}) => {
  return (
    <div className='success-page'>
      <div className='success-content'>
          <img src={CheckIcon} alt='check'/>
          <h1>{title}</h1>
          <p>
            {description}
          </p>
          <div className='button-wrapper'>
          <Button>{button}</Button>
          </div>
          
      </div>
    </div>
  );
}

export default Success;