import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'

import './styles.css'
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import api from '../../services/api'
import NavHeader from '../../components/NavHeader'

function Landing(){
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('/connections').then(response => {
      const { total } = response.data
      setTotalConnections(total)
    })
  }, [])

  return (
    <div id="page-landing">
      <div className="container" id="page-landing-container">
      <NavHeader>
        <div className="user-info">
          <img src='https://avatars2.githubusercontent.com/u/48053804?s=460&u=41a09241f1f585f000c86e67bf3b6147aed66ed6&v=4' alt=''/>
          <p>Luis sousa</p>
        </div>
        <button className='login-button'><FiPower size={20} className='icon'/></button>
      </NavHeader>
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img 
          src={landingImg} 
          alt="Plataforma de Estudos" 
          className="hero-image"
        />

        <div className='welcome-text'>
          <p>Seja bem-vindo, <br/>
            <strong>O que deseja Fazer?</strong>
          </p>
        </div>

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="estudar"/>
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="dar-aulas"/>
            Dar Aula  
          </Link>
        </div>
        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas
          <img src={purpleHeartIcon} alt='Coração roxo'/>
        </span>
      </div>
    </div>
  )
}

export default Landing