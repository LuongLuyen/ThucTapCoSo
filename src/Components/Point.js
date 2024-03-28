import '../Assets/Point.css'
import axios from 'axios'
import {useEffect,useState} from 'react'
import { FaSearch } from "react-icons/fa";
function Point() {
    const [listPoint, setListPoint] = useState([])
    const [maSV, setMSV] = useState("")
    const [userSearch, setUserSearch] = useState(null)
    useEffect(() => {
      const maSV = JSON.parse(sessionStorage.getItem('pass'))
      axios.post(`${process.env.REACT_APP_SERVER}/api/point`,{maSV})
        .then((response) => {
            setListPoint(response.data)
        })
    }, []) 
    const thongKe =()=>{
        let a= 0
        let b= 0
        let c=0
        listPoint.forEach((m)=>{
            a += Number(m[0].diemTongKetHe10)
            b += Number(m[2].diemTongKetHe4)
            if(m[0].diemBangChu !== "F"){
                c += Number(m[1].soTin)
            }
        })
        a=a/6
        b=b/6
        return[a.toFixed(2),b.toFixed(2),c.toFixed(0)]
    }
    const [a,b,c]=thongKe()
    const searchPoint = async()=>{
       const res = await axios.post(`${process.env.REACT_APP_SERVER}/api/point`,{maSV})
       const resc = await axios.post(`${process.env.REACT_APP_SERVER}/api/user-code`,{maSV})
       setUserSearch(resc.data)
       setListPoint(res.data)
    }
    return ( 
        <>
            <div className='titlehd'>
                <h4 className='ten'>Học kỳ 2 Năm học 2021-2022</h4>
                {userSearch ? 
                <h4 className='ten'>{userSearch.ho+" "+userSearch.ten +" "+ userSearch.maLop}</h4>
                :<></>}
                <div className='search'>
                    <input className="form-control mr-sm-2 custom-i" type="search" onChange={(e)=>setMSV(e.target.value)} placeholder="Mã Sinh Viên" aria-label="Search"/>
                    <div className="btn btn-outline-danger custom-search" onClick={searchPoint}><FaSearch/></div>
                </div>
            </div>
            <table>
                <tbody>

                    <tr>
                        <th className='td'>STT</th>
                        <th className='td'>Mã MH</th>
                        <th className='td'>Nhóm HP</th>
                        <th className='td'>Tên Môn học</th>
                        <th className='td'>Số tín</th>
                        <th className='td'>Điểm thi</th>
                        <th className='td'>Điểm TK(10)</th>
                        <th className='td'>Điểm TK(4)</th>
                        <th className='td'>Điểm TK(C)</th>
                        <th className='td'>Kết quả</th>
                    </tr>
                    {Array.from(listPoint).map((i,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{i[0].maMonHoc}</td>
                                <td>{i[0].nhomHocPhan}</td>
                                <td>{i[1].tenMonHoc}</td>
                                <td>{i[1].soTin}</td>
                                <td>{i[0].diemThiCuoiKy}</td>
                                <td>{i[0].diemTongKetHe10}</td>
                                <td>{i[2].diemTongKetHe4}</td>
                                <td>{i[0].diemBangChu}</td>
                                <td>{i[2].trangThai}</td>
                            </tr>
                    ))}
                </tbody>
        </table>
        <div className='fpoint'>
            <div>
                <div>- Điểm trung bình học kỳ hệ 4: <span className='qq'>{b}</span></div>
                <div>- Điểm trung bình học kỳ hệ 10:<span className='qq'>{a}</span></div>
                <div>- Số tín chỉ đạt học kỳ:<span className='qq'>{c}</span></div>
            </div>
            <div>
                <div>- Điểm trung bình tích lũy hệ 4: --</div>
                <div>- Điểm trung bình tích lũy hệ 10: --	</div>
                <div>- Số tín chỉ tích lũy: --</div>
            </div>
        </div>
        </>
     );
}

export default Point;