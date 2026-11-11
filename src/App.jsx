import { useState } from 'react'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import employees from './data/employees.js'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => setIsLoggedIn(true)
  const handleLogout = () => setIsLoggedIn(false)

  return (
    <div className="app">
      {isLoggedIn ? (
        <Home employees={employees} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  )
}

export default App
