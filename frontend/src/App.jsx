import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  AdminScreen,
  AdminScreenPostEdit,
  Dashboard,
  Login,
  Main,
} from './pages'

const App = () => {
  return (
    <div className='main-container'>
      <Router>
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/admin/post' exact component={AdminScreenPostEdit} />
        <Route path='/admin/post/:id' exact component={AdminScreenPostEdit} />
        <Route path='/admin' exact component={AdminScreen} />
        <Route path='/' exact component={Main} />
      </Router>
    </div>
  )
}

export default App
