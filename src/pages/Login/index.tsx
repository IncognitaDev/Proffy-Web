import React from 'react';

import AsideLogo from '../../components/AsideLogo'

import './styles.css'
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: React.FC = () => {
  return (
    <div className='login-page'>
      <AsideLogo/>
      <div className="login-content">
        <form action="">
          <h1>Fazer login</h1>
          <Input name='email' label='email' />
          <Input name='password' label='senha' type='password' />

          <Button>Entrar</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;