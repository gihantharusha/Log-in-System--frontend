import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import LogInPage from './Pages/LogInPage'
import SingUpPage from './Pages/SingUpPage'
import Users from './Pages/Users'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LogInPage />} />
      <Route path='/singup' element={<SingUpPage/>} />
      <Route path='/users' element={<Users />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App