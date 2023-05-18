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
import Profile from './Components/Account/Profile/Profile'
import Security from './Components/Account/Security/Security'
import DeleteAccount from './Components/Account/Delete Account/DeleteAccount'
import FillingInformations from './Pages/FillingInformations/FillingInformations'

const App = () => {
  return (
    <Routes>
      <Route path="sign-up" exact element={<SignRedirect children={<SignUp />} />}/>
      <Route path="sign-in" exact element={<SignRedirect children={<SignIn />} />}/>
      <Route path="fill-profile" exact element={<FillingInformations/>}/>
      <Route path="dashboard" exact element={<ProtectedRoute  children={<Dashboard/>} />}>
        <Route path='' exact element={<Overview />} />
        <Route path='tags' exact element={<Tags />} />
        <Route path='account' exact element={<Account />} >
          <Route path="" exact element={<Profile />} />
          <Route path="profile" exact element={<Profile />} />
          <Route path="security" exact element={<Security />} />
          <Route path="delete" exact element={<DeleteAccount />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App