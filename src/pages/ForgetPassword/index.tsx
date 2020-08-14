import React, { useState } from 'react';

import './styles.css';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Success from '../../components/Success';
import AsideLogo from '../../components/AsideLogo';

const ForgetPassword: React.FC = () => {

  const [modal, setModal] = useState(false)
  return (
    <>
    {!modal &&
     <div className="forget-page">
     <div className="forget-content">
     <form action="">
         <h1>Eita, esqueceu sua senha?</h1>
         <Input name='email' label='email' />

         <Button>Enviar</Button>
       </form>
     </div>
     <AsideLogo/>
   </div>
  }
  {modal && 
    <Success title='Redefinição Enviada' description='Boa, agora é só checar o e-mail que foi enviado para você
    redefinir sua senha e aproveitar os estudos.' button='Voltar ao Login'/>
  }
   </>
  );
}

export default ForgetPassword;