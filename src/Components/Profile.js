import '../Assets/Profile.css'
import Avt from '../Assets/avt.jpg'
import { FaFacebookF,FaTwitter,FaLinkedinIn ,FaGithub } from "react-icons/fa";
import {useEffect,useState} from 'react'
function Profile() {
  const [userName, setUserName] = useState(null)
  const [password, setPassword] = useState(null)
  const [lop, setLop] = useState(null)
  useEffect(() => {
    const userName = JSON.parse(sessionStorage.getItem('name'))
    const password = JSON.parse(sessionStorage.getItem('pass'))
    const lop = JSON.parse(sessionStorage.getItem('class'))
    if (userName && password && lop) {
     setUserName(userName)
     setPassword(password)
     setLop(lop)
    }
  }, [])
  const logOut = ()=>{
    sessionStorage.clear()
    window.location.href = process.env.REACT_APP_CLIENT
  }
    return ( 
        <div className="cardp">
        <img src={Avt} alt="John" style={{width:"50%",margin:"10px",borderRadius: "100px", border: "solid 1px #333"}}/>
        <h2>{userName}</h2>
        <p className="title">{lop}</p>
        <p>{password}</p>
        <a className='iconP' href="/home"><FaFacebookF/></a>
        <a className='iconP' href="/home"><FaTwitter/></a>
        <a className='iconP' href="/home"><FaGithub/></a>
        <a className='iconP' href="/home"><FaLinkedinIn/></a>
        <p>
          <a href='/thongtin'>
          <button>Hồ sơ</button>
          </a>
        </p>
        <p><button onClick={()=>logOut()}>Đăng xuất</button></p>
      </div>
    );
}

export default Profile;