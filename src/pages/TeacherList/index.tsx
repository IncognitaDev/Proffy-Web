import React, { useState, FormEvent } from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/Input'

import './styles.css'
import Select from '../../components/Select'
import api from '../../services/api'

function TeacherList(){
  const [time, setTime] = useState('')
  const [subject, setSubject] = useState('')
  const [week_day, setWeek_Day] = useState('')
  const [proffyList, setProffyList] = useState([])

  async function handleSearch(e: FormEvent){
    e.preventDefault()

    const response = await api.get('classes',{
      params: {
        subject,
        week_day,
        time,
      }
    })

    setProffyList(response.data)
  } 

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title='Estes são os proffys disponíveis'>
        <form id="search-teachers" onSubmit={e => handleSearch(e)}>
          <Select 
            name="subject" 
            label='Materia' 
            value={subject}
            onChange={e => setSubject(e.target.value)}
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
            ]}/> 
          <Select 
            name="week_day" 
            label='Dia da Semana' 
            value={week_day}
            onChange={e => setWeek_Day(e.target.value)}
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
            name='time' 
            type='time' 
            label='Hora'
            value={time}
            onChange={e => setTime(e.target.value)}
          />
          <button type='submit'>
            Procurar
          </button>
        </form>
      </PageHeader>
      <main>
        {proffyList.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>

    </div>
  )
}

export default TeacherList