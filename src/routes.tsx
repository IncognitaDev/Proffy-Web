import React from 'react'
import { Route, Switch , BrowserRouter} from 'react-router-dom'

import Landing from './pages/Landing'
import TeacherForm from './pages/TeacherForm'
import TeacherList from './pages/TeacherList'
import Success from './components/Success'

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path='/study'  component={TeacherList}/>
        <Route path='/give-classes'  component={TeacherForm}/>
        <Route path='/success' component={Success}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes