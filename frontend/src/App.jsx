import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AdminScreen, Dashboard, Login, Main } from './pages'

const App = () => {
  return (
    <div className='main-container'>
      <Router>
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/admin' component={AdminScreen} />
        <Route path='/' exact component={Main} />
      </Router>
    </div>
  )
}

export default App
