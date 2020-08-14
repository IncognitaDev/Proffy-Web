import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import './styles.css'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import warningIcon from "../../assets/images/icons/warning.svg";
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';
import Success from '../../components/Success'

function TeacherForm(){
  const [scheduleItems, setScheduleItems] = useState([{week_day: 0, from: '', to: '' }])
  const [personalInfo, setPersonalInfo] = useState({ name: '', avatar: '', whatsapp: '', bio: ''})
  const [classInfo , setClassInfo] = useState({ subject: '', cost: ''})

  const [modal, setModal] = useState(false)

  const history = useHistory()

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {week_day: 0 , from: '', to: '' }
    ])
  }
  function setScheduleItemValue(index: number, field: string, value: string) {
    const updatedSchedule = scheduleItems.map((scheduleItem, i) => {
      if (index === i ){
        return {...scheduleItem, [field]: value}
      }
      return scheduleItem
    }) 

    setScheduleItems(updatedSchedule)
    console.log(scheduleItems)
  }

  function handleCreateClass(e : FormEvent){
    e.preventDefault()

    const {name, avatar, whatsapp, bio} = personalInfo
    const {subject,cost} = classInfo
    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('cadastro realizado com sucesso ')

      history.push('/')
    }).catch(()=>{ 
      alert('erro no cadastro ')
    }
    )
  }

  return ( 
    <>
    {!modal && 

      <div id="page-teacher-form" className="container">
    <PageHeader title='Que incrível que voce quer dar aulas' description='O Primeiro passo é preencher esse formulário de inscrição' titlePage='Dar Aula'/>

    <main>
      <form onSubmit={e => handleCreateClass(e)}>
      <fieldset>
        <legend>Seus Dados</legend>
        <Input name="name" label='nome completo' value={personalInfo.name} onChange={ (e) => setPersonalInfo(
          {...personalInfo, name: e.target.value})}/> 
          <Input name='avatar' label='Avatar' value={personalInfo.avatar} onChange={(e)=> setPersonalInfo({...personalInfo, avatar: e.target.value})}/>
          <Input name='whatsapp' label='Whatsapp' value={personalInfo.whatsapp} onChange={(e)=> setPersonalInfo({...personalInfo, whatsapp: e.target.value})}/>
          <Textarea name='bio' label='Biografia' value={personalInfo.bio} onChange={(e)=> setPersonalInfo({...personalInfo, bio: e.target.value})}/>
      </fieldset>
      <fieldset>
        <legend>Sobre a aula</legend>
          <Select 
            value={classInfo.subject} 
            name="subject" label='Materia' 
            onChange={(e)=> setClassInfo({...classInfo, subject: e.target.value})}
            options={[
            {value: "Artes", label: "Artes"},
            {value: "Biologia", label: "Biologia"},
            {value: "Ciências", label: "Ciências"},
            {value: "Educação física", label: "Educação física"},
            {value: "Física", label: "Física"},
            {value: "Geografia", label: "Geografia"},
            {value: "História", label: "História"},
            {value: "Matemática", label: "Matemática"},
            {value: "Português", label: "Português"},
            {value: "Química", label: "Química"},
          ]}
          />   
          <Input 
            value={classInfo.cost} 
            name='cost' 
            onChange={(e)=> setClassInfo({...classInfo, cost: e.target.value})}
            label='Custo da sua hora por aula'
          />
      </fieldset>
      <fieldset>
        <legend>Horários Disponíveis
          <button  type='button' onClick={()=> addNewScheduleItem()}>+ Novo Horário</button>
        </legend>
        {scheduleItems.map((scheduleItem, i) => {
          return (
            <div key={scheduleItem.week_day} className="schedule-item">
          <Select 
            name="week_day" 
            label='Dia da Semana'
            value={scheduleItem.week_day}
            onChange={(e) => setScheduleItemValue(i, 'week_day', e.target.value)}
            options={[
            {value: "1", label: "Segunda-feira"},
            {value: "2", label: "Terça-feira"},
            {value: "3", label: "Quarta-feira"},
            {value: "4", label: "Quinta-feira"},
            {value: "5", label: "Sexta-feira"},
            {value: "6", label: "Sábado"},
            {value: "0", label: "Domingo"},
          ]}/> 
          <Input 
            name='from' 
            label='Das' 
            type='time'
            value={scheduleItem.from} 
            onChange={(e) => setScheduleItemValue(i, 'from', e.target.value)}
          />
          <Input 
            name='to' 
            label='Ate as' 
            type='time'
            value={scheduleItem.to} 
            onChange={(e) => setScheduleItemValue(i, 'to', e.target.value)}
          />
        </div>
          )
        })}
      </fieldset>

      <footer>
        <p>
          <img src={warningIcon} alt='Aviso Importante'/>
          Importante! <br />
          Preencha todos os campos
        </p>

        <button type='submit'>Salvar todos os dados</button>o
      </footer>
      </form>
    </main>
  </div>
    } 
    {modal && 
      <Success title='Cadastro salvo!' description='Tudo certo, seu cadastro está na nossa lista de professores.
      Agora é só ficar de olho no seu WhatsApp.' button='Acessar lista'/>
    }
    </>
  )
}

export default TeacherForm