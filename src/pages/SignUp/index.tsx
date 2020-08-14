import React, { useState } from 'react';

import AsideLogo from '../../components/AsideLogo'
import Input from '../../components/Input'
import Button from '../../components/Button'
import './styles.css';
import Success from '../../components/Success';

const SignUp: React.FC = () => {

  const [modal, setModal] = useState(false)

  return (
    <>
    {!modal && 
    <div className='signup-page'>
      <div className='signup-content'>
         <form action="">
          <h1>Cadastro</h1>
          <Input name='Nome' label='Nome' />
          <Input name='Sobrenome' label='Sobrenome' />
          <Input name='E-mail' label='E-mail' />
          <Input name='Senha' label='Senha' type='password' />

          <Button>Entrar</Button>
        </form>
      </div>
      <AsideLogo/>
    </div>
    }
    {modal && 
      <Success title='Cadastro concluído' description='Agora você faz parte da plataforma da Proffy.
      Tenha uma ótima experiência.' button='Fazer login'/>  
    }
    </>
  );
}

export default SignUp;