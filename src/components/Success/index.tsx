import React from 'react';

import CheckIcon from '../../assets/images/icons/success-check-icon.svg'
import './styles.css';

interface SuccessProps {
  title: string;
  description?: string;

}

const Success: React.FC<SuccessProps> = () => {
  return (
    <div className='success-page'>
      <div className='success-content'>
          <img src={CheckIcon} alt='check'/>
          <h1>Redefinição Enviada!</h1>
          <p>
            Boa, agora é só checar o e-mail que foi enviado para você
            redefinir sua senha e aproveitar os estudos.
          </p>
      </div>
    </div>
  );
}

export default Success;