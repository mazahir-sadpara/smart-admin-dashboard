import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ResetPasswordEmail from './pages/ResetPasswordEmail';
import ResetPasswordOTP from './pages/ResetPasswordOTP';
import ResetPasswordNew from './pages/ResetPasswordNew';


const App = () => {
  return (
    <>
    <ToastContainer/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
        <Route path="/reset-password/email" element={<ResetPasswordEmail/>} />
        <Route path="/reset-password/otp" element={<ResetPasswordOTP/>} />
        <Route path="/reset-password/new" element={<ResetPasswordNew/>} />
     </Routes> 
    </>
  )
}

export default App
