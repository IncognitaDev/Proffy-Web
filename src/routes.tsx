import React from 'react'
import { Route, Switch , BrowserRouter} from 'react-router-dom'

import Landing from './pages/Landing'
import TeacherForm from './pages/TeacherForm'
import TeacherList from './pages/TeacherList'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ForgetPassword from './pages/ForgetPassword'

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path='/study'  component={TeacherList}/>
        <Route path='/give-classes' component={TeacherForm}/>
        <Route path='/login' component={Login}/>
        <Route path='/signUp' component={SignUp}/>
        <Route path='/forget' component={ForgetPassword}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes