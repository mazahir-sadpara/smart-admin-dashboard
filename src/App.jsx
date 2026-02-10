import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Users from './pages/dashboard/Users'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ResetPasswordEmail from './pages/auth/ResetPasswordEmail';
import ResetPasswordOTP from './pages/auth/ResetPasswordOTP';
import ResetPasswordNew from './pages/auth/ResetPasswordNew';


const App = () => {
  return (
    <>
    <ToastContainer/>
     <Routes>
      <Route path='/' element={
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
      }/>
      <Route path='/users' element={
        <ProtectedRoute>
          <Users/>
        </ProtectedRoute>
      }/>
      <Route path='/login' element={<Login/>}/>
        <Route path="/reset-password/email" element={<ResetPasswordEmail/>} />
        <Route path="/reset-password/otp" element={<ResetPasswordOTP/>} />
        <Route path="/reset-password/new" element={<ResetPasswordNew/>} />
     </Routes> 
    </>
  )
}

export default App
