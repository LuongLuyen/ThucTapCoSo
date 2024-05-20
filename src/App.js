import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import ThongTin from './Pages/Profile'
import User from './Pages/User'
import Delete from './Pages/Delete'
import './Assets/custom.css'
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import {useEffect,useState} from 'react'

function App() {
  const [userName, setUserName] = useState(null)
  const [password, setPassword] = useState(null)
  useEffect(() => {
    const userName = JSON.parse(sessionStorage.getItem('name'))
    const password = JSON.parse(sessionStorage.getItem('pass'))
    if (userName && password) {
     setUserName(userName)
     setPassword(password)
    }
  }, [])
  const checkLogin = ()=>{
    if (userName !== null && password !== null){
      return true
    }
    return false
  }
  return (
    <Router>
      <Routes>
        <Route path='/home' element={checkLogin() ? <Home/>: <Login/>}/>
        <Route path='/thongtin' element={checkLogin() ? <ThongTin/>: <Login/>}/>
        <Route path='/' element={<Login />}/>
        <Route path='/tao-tk' element={<User />}/>
        <Route path='/xoa-tk' element={<Delete />}/>
      </Routes>
    </Router>
  );
}
export default App;