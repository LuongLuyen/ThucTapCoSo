import { useState,useEffect } from 'react';
import '../Assets/Login.css'
import axios from 'axios'
function Login() {
  const [userName,setUserName]=useState(null)
  const [password,setPassword]=useState(null)
  const [server,setServer]=useState(null)

  useEffect(() => {
    if( userName !== null && password !== null){
        sessionStorage.setItem('name', JSON.stringify(userName))
        sessionStorage.setItem('pass', JSON.stringify(password))
    }
    axios.get(`${process.env.REACT_APP_SERVER}/api`)
        .then((response) => {
            setServer(response.data.StatusServer)
        })
        .catch((err)=>{
          return null
        })
  }, [userName,password])
  const HoTen = (input)=>{
    const words = input.split(" ")
    if (words.length >= 2) {
        const ho = words.slice(0, -1).join(" ")
        const ten = words[words.length - 1]
        return [ho, ten]
    } else {
        return [input, ""]
    }
  }
  const Authentication = async()=> {
    if(userName){

      const [ho, ten] = HoTen(userName)
      if(userName ==="" || password === ""){
          alert(`Vui lòng kiểm tra lại tài khoản mật khẩu: "${userName}" "${password}"`)
          sessionStorage.clear()
          return null
        }
        try{
          const res = await axios.post(`${process.env.REACT_APP_SERVER}/api/user-one`, {ho, ten,password})
          const dataDB = res.data
          const name =dataDB.ho +" "+dataDB.ten
          if(name === userName && dataDB.maSinhVien === password){
              sessionStorage.setItem('class', JSON.stringify(dataDB.maLop))
              sessionStorage.setItem('id', JSON.stringify(dataDB._id))
              window.location.href = '/home'
          }else {
            alert(`Vui lòng kiểm tra lại tài khoản mật khẩu: "${userName}" "${password}"`)
              sessionStorage.clear()
              return null
          }
      }catch(err){
        alert(`Vui lòng kiểm tra lại tài khoản mật khẩu: "${userName}" "${password}"`)
          sessionStorage.clear()
          return null
      }
    }
  }
  if (!server) return (
  < div className='w'>
    <div className='loader'></div>
    <h4 className='loading'>Vui lòng chờ....</h4>
    <div className='d'>Do server free nên sau 15 phút tự tắt</div>
    <div className='d'>Vui lòng chờ 30s đến 1 phút, F5 trang !</div>
  </div>
  )
    return ( 
        <>
        <div className="container">
          <label htmlFor="uname"><b>Tài khoản</b></label>
          <input type="text" placeholder="Họ và tên: (ADMIN 1)" onChange={(e)=>setUserName(e.target.value)}/>
  
          <label htmlFor="psw"><b>Mật khẩu</b></label>
          <input type="password" placeholder="Mã sinh viên:(ADMIN)" onChange={(e)=>setPassword(e.target.value)}/>
  
          <button onClick={Authentication}>Đăng nhập</button>
          <label>
            <input type="checkbox" /> Ghi nhớ đăng nhập
          </label>
        </div>
        <div className="container">
          <button type="button" className="cancelbtn">Cancel</button>
          <span className="psw">Quên mật khẩu?</span>
        </div>
      </>
     );
}

export default Login;