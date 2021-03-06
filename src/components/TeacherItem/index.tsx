import React from 'react';

import api from '../../services/api'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

export interface Teacher {
  name: string,
    subject: string,
    bio: string,
    avatar: string,
    cost: number,
    id: number,
    user_id: number,
    whatsapp: string
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

  function createNewConnection(){
    api.post('connections', {
      user_id: teacher.user_id
    })
  }

  return (
    <article className='teacher-item'>
          <header>
            <img src={teacher.avatar} alt={teacher.name}/>
            <div>
              <strong>{teacher.name}</strong>
              <span>{teacher.subject}</span>
            </div>
          </header>
          
          <p>{teacher.bio}</p>

          <footer>
            <p>
              preço/hora
              <strong>R$ {teacher.cost}</strong>
            </p>
            <a 
              target='_blank'
              rel="noopener noreferrer"
              onClick={() => createNewConnection()} 
              href={`https://wa.me/${teacher.whatsapp}`}>
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </a>
          </footer>
        </article>
  )
}

export default TeacherItem;