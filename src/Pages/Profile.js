import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AVT from '../Assets/avt.jpg'
import { useState,useEffect } from "react";
import axios from 'axios'
function Profile() {
    const [fName, setFName] = useState()
    const [lName, setLName] = useState()
    const [maSinhVien, setMaSinhVien] = useState()
    const [maLop, setMaLop] = useState()
    const [fullName, setFullName] = useState()
    const [id, setId] = useState()
    const [time, setTime] = useState("Chưa cập nhật")
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
    const months = ["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"]
    useEffect(() => {
        const fullName = JSON.parse(sessionStorage.getItem('name'))
        const password = JSON.parse(sessionStorage.getItem('pass'))
        const lop = JSON.parse(sessionStorage.getItem('class'))
        const id = JSON.parse(sessionStorage.getItem('id'))
        if (id){
            setId(id)
        }
        const [ho, ten] = HoTen(fullName)
        setFName(ho)
        setLName(ten)
        setMaSinhVien(password)
        setMaLop(lop)
        setFullName(fullName)
        axios.post(`${process.env.REACT_APP_SERVER}/api/user-one`, {ho, ten,password})
        .then((response) => {
            if (response.data.updatedAt){
                setTime(converTime(response.data.updatedAt))
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []) 
    const converTime = (input)=>{
        const inputDate = new Date(input)
        const formattedDate = `Đã cập nhật vào ngày ${inputDate.getDate()} ${months[inputDate.getMonth()]} ${inputDate.getFullYear()}`
        return formattedDate
    }
    const updateUser = async()=>{
        const data =
            {
                maSinhVien:maSinhVien,
                maLop:maLop,
                ho:fName,
                ten:lName
            }
        const res = await axios.put(`${process.env.REACT_APP_SERVER}/api/user/${id}`,data)
        if(res.data){
            sessionStorage.setItem('name', JSON.stringify(fName+ " "+lName))
            sessionStorage.setItem('pass', JSON.stringify(maSinhVien))
            sessionStorage.setItem('class', JSON.stringify(maLop))
            sessionStorage.setItem('id', JSON.stringify(id))
            setTime(converTime(res.data.updatedAt))
            alert("Cập nhật hồ sơ thành công !")
        }
    }
    const logOut = ()=>{
        sessionStorage.clear()
        window.location.href = process.env.REACT_APP_CLIENT
      }
    return ( <>
     <Header/>
          <div className="container-fluid main" style={{ overflowY: "scroll"}}>
            <div className="container">
            <div className="row flex-lg-nowrap">
            <div className="col-12 col-lg-auto mb-3" style={{ width: "200px" }}>
                <div className="card p-3">
                <div className="e-navlist e-navlist--active-bg">
                    <ul className="nav">
                    <li className="nav-item"><a className="nav-link px-2 active" href="/thongtin"><i className="fa fa-fw fa-bar-chart mr-1"></i><span>Thông tin</span></a></li>
                    <li className="nav-item"><a className="nav-link px-2" href="/thongtin"><i className="fa fa-fw fa-th mr-1"></i><span>Chức năng</span></a></li>
                    <li className="nav-item"><a className="nav-link px-2" href="t/thongtin"><i className="fa fa-fw fa-cog mr-1"></i><span>Cài đặt</span></a></li>
                    </ul>
                </div>
                </div>
            </div>

            <div className="col">
                <div className="row">
                <div className="col mb-3">
                    <div className="card">
                    <div className="card-body">
                        <div className="e-profile">
                        <div className="row">
                            <div className="col-12 col-sm-auto mb-3">
                            <div className="mx-auto" style={{ width: "140px" }}>
                                <div className="d-flex justify-content-center align-items-center rounded" style={{height: "140px", backgroundColor: "rgb(233, 236, 239)"}}>
                                <span >
                                    <img style={{width: "100%", border: "solid 1px #333", borderRadius: "10px"}} alt="avt" src={AVT}/>
                                </span>
                                </div>
                            </div>
                            </div>
                            <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                            <div className="text-center text-sm-left mb-2 mb-sm-0">
                                <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">{fullName || ''}</h4>
                                <p className="mb-0">{maLop || ''}</p>
                                <div className="text-muted"><small>{time}</small></div>
                            </div>
                            <div className="text-center text-sm-right">
                                <span className="badge badge-secondary">administrator</span>
                                <div className="text-muted"><small>Đã tham gia ngày 09 tháng 12 năm 2023</small></div>
                            </div>
                            </div>
                        </div>
                        <ul className="nav nav-tabs">
                            <li className="nav-item"><a href="/" className="active nav-link">Cập nhật thông tin cá nhân</a></li>
                        </ul>
                        <div className="tab-content pt-3">
                            <div className="tab-pane active">
                            <form className="form" noValidate="">
                                <div className="row">
                                <div className="col">
                                    <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                        <label>Họ,tên đệm</label>
                                        <input className="form-control" type="text" name="ho" placeholder="Nguyễn Văn" value={fName || ''} onChange={(e)=>setFName(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                        <label>Tên</label>
                                        <input className="form-control" type="text" name="ten" placeholder="An" value={lName || ''} onChange={(e)=>setLName(e.target.value)} />
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                        <label>Mã sinh viên</label>
                                        <input className="form-control" type="text" placeholder="B21DCCN001" value={maSinhVien || ''} onChange={(e)=>setMaSinhVien(e.target.value)} />
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                        <label>Mã lớp</label>
                                        <input className="form-control" type="text" placeholder="D21CQCN01-B" value={maLop || ''} onChange={(e)=>setMaLop(e.target.value)} />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col d-flex justify-content-end">
                                    <span className="btn btn-primary" onClick={updateUser}>Cập nhật</span>
                                </div>
                                </div>
                            </form>

                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-12 col-md-3 mb-3">
                    <div className="card mb-3">
                    <div className="card-body">
                        <div className="px-xl-3">
                        <button className="btn btn-block btn-secondary">
                            <i className="fa fa-sign-out"></i>
                            <span onClick={()=>logOut()}>Đăng xuất</span>
                        </button>
                        </div>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-body">
                        <h6 className="card-title font-weight-bold">Hỗ trợ kỷ thuật</h6>
                        <p className="card-text">Liên hệ quản trị viên</p>
                        <button type="button" className="btn btn-primary">Kết nối</button>
                    </div>
                    </div>
                </div>
                </div>

            </div>
            </div>
            </div>
          </div>
          <Footer/>
    </> );
}

export default Profile;