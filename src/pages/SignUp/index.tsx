import React from 'react';

import AsideLogo from '../../components/AsideLogo'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Modal from 'react-modal'

import './styles.css';

const SignUp: React.FC = () => {
  return (
    <>
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
    <Modal>
      
    </Modal>
    </>
  );
}

export default SignUp;