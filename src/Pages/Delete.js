import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
function Delete() {
    const [data, setData]= useState([])
    const [ptCuoi, setCuoi]= useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER}/api/user`)
            .then((response) => {
                setData(response.data)
                setCuoi(response.data.at(-1))
            })
            .catch((err)=>{
              return null
            })
      }, [])
      const deleteUser = async(id)=>{
        await axios.delete(`${process.env.REACT_APP_SERVER}/api/user/${id}`)
        alert("Thành công")
        const res = await axios.get(`${process.env.REACT_APP_SERVER}/api/user`)
        setData(res.data)
        setCuoi(res.data.at(-1))
    }
    return ( 
        <>
        <Header/>
        <div className="dele">
            <h1>Danh sách người dùng</h1>
        <table>
                <tr>
                    <th>STT</th>
                    <th>Ho</th>
                    <th>Tên</th>
                    <th>Mã SV</th>
                    <th>Mã Lớp</th>
                    <th>Xóa</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>{ptCuoi.maSinhVien}</td>
                    <td>{ptCuoi.maLop}</td>
                    <td>{ptCuoi.ho}</td>
                    <td>{ptCuoi.ten}</td>
                    <td onClick={()=>deleteUser(ptCuoi._id)}>X</td>
                      </tr>
            {Array.from(data).map((i,index)=>(        
                      <tr key={index}>
                          <td>{index+1}</td>
                          <td>{i.maSinhVien}</td>
                          <td>{i.maLop}</td>
                          <td>{i.ho}</td>
                          <td>{i.ten}</td>
                          <td onClick={()=>deleteUser(ptCuoi._id)}>X</td>
                      </tr>
                       ))}
            </table>
        </div>
        <Footer/>
        </>
     );
}

export default Delete;