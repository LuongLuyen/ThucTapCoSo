import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useState } from "react";
import axios from "axios";
function User() {
    const [ho,setHo]=useState("")
    const [maSinhVien,setPassword]=useState("")
    const [maLop,setMalop]=useState("")
    const [ten,setTen]=useState("")

    const register = async()=>{
        if (ho !== "" && ten !== "" && maSinhVien !== "" && maLop !== ""){
           await axios.post(`${process.env.REACT_APP_SERVER}/api/user`,{ maSinhVien, maLop, ho,ten})
           alert("Thành công")
            window.location.href = '/xoa-tk'
        }else {
            alert("Vui lòng nhập thông tin")
        }
    }
    return ( 
        <>
        <Header/>
        <div className="register">
        <div className="container">
          <label htmlFor="uname"><b>Họ</b></label>
          <input type="text" placeholder="Nguyễn Văn" onChange={(e)=>setHo(e.target.value)}/>
  
          <label htmlFor="uname"><b>Tên</b></label>
          <input type="text" placeholder="A" onChange={(e)=>setTen(e.target.value)}/>
  
          <label htmlFor="psw"><b>Mã sinh viên</b></label>
          <input type="text" placeholder="Mã sinh viên" onChange={(e)=>setPassword(e.target.value)}/>
          <label htmlFor="psw"><b>Mã lớp</b></label>
          <input type="text" placeholder="Mã lớp" onChange={(e)=>setMalop(e.target.value)}/>
  
          <button onClick={register} >Đăng ký</button>
        </div>
        </div>
        <Footer/>
        </>
     );
}

export default User;