import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Dashboard, Login, Main } from './pages'

const App = ({ history }) => {
  return (
    <div className='main-container'>
      <Router>
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/' exact component={Main} />
      </Router>
    </div>
  )
}

export default App
