import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Pages/Sign Up/SignUp'
import SignIn from './Pages/Sign In/SignIn'
import Dashboard from './Pages/Dashboard/Dashboard'
import ProtectedRoute from './Protected Routes/ProtectedRoute'
import SignRedirect from './Protected Routes/SignRedirect'
import NotFound from './Pages/Not Found/NotFound'
import Overview from './Pages/Dashboard/Overview/Overview'
import Tags from './Pages/Dashboard/Tags/Tags'
import Account from './Pages/Dashboard/Account/Account'
import Profile from './Components/Account/Profile'

const App = () => {
  return (
    <Routes>
      <Route path="sign-up" exact element={<SignRedirect children={<SignUp />} />}/>
      <Route path="sign-in" exact element={<SignRedirect children={<SignIn />} />}/>
      <Route path="dashboard" exact element={<ProtectedRoute  children={<Dashboard/>} />}>
        <Route path='' exact element={<Overview />} />
        <Route path='tags' exact element={<Tags />} />
        <Route path='account' exact element={<Account />} >
          <Route path="" exact element={<Profile />} />
          <Route path="profile" exact element={<Profile />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App