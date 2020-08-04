import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className='teacher-item'>
          <header>
            <img src="https://avatars2.githubusercontent.com/u/48053804?s=460&u=41a09241f1f585f000c86e67bf3b6147aed66ed6&v=4" alt="Luis Sousa"/>
            <div>
              <strong>Luis Sousa</strong>
              <span>Química</span>
            </div>
          </header>
          
          <p>
          Entusiasta das melhores tecnologias de química avançada.
          <br/><br/>
          Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>

          <footer>
            <p>
              preço/hora
              <strong>R$ 20,00</strong>
            </p>
            <button type='button'>
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem;