import '../Assets/Main.css'
import TB from '../Assets/tb.png'
function Main() {
    return ( 
        <>
            <h1>Thông báo</h1>
            <>
                <div className="card mb-3 main__content">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={TB} className="img-fluid rounded-start img-custom" alt="/"/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Thông báo: Mở hệ thống đăng ký môn học học kỳ 2 năm học 2023-2024</h5>
                            <p className="card-text">Hệ thống đăng ký môn học sẽ mở cho sinh viên khóa 2023 đăng ký môn học học kỳ 2 năm học 2023-2024 cụ thể:</p>
                            <p className="card-text"><small className="text-body-secondary">20/01/2024</small></p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 main__content">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={TB} className="img-fluid rounded-start img-custom" alt="/"/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Thông báo V/v: Mở hệ thống Đăng ký chuyên ngành D20VT</h5>
                            <p className="card-text">Hệ thống sẽ mở cho sinh viên Đại học chính quy khóa 2020 ngành Kỹ thuật điện tử viễn thông đăng ký nguyện vọng chuyên ngành theo kế hoạch, cụ thể:</p>
                            <p className="card-text"><small className="text-body-secondary">20/01/2024</small></p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 main__content">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={TB} className="img-fluid rounded-start img-custom" alt="/"/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Thông báo V/v: Đăng ký môn học thay thế tốt nghiệp/ Đồ án tốt nghiệp các ngành khối kỹ thuật khóa 2019</h5>
                            <p className="card-text">Thực hiện theo kế hoạch đăng ký môn học thay thế tốt nghiệp/ đồ án tốt nghiệp của các ngành khối kỹ thuật khóa 2019, hệ thống QLĐT sẽ mở cho sinh viên đăng ký theo đúng kế hoạch, cụ thể:</p>
                            <p className="card-text"><small className="text-body-secondary">21/01/2024</small></p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 main__content">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={TB} className="img-fluid rounded-start img-custom" alt="/"/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Thông báo: kết quả giải quyết đơn hỗ trợ đăng ký học kỳ 1 năm học 2023-2024</h5>
                            <p className="card-text">Phòng Giáo vụ đã hoàn thành việc xử lý đơn hỗ trợ đăng ký của các khoá 2020, 2021 và 2022; Đề nghị toàn bộ sinh viên đã làm đơn kiểm tra, rà soát lại lịch học cá nhân, cụ thể như sau:</p>
                            <p className="card-text"><small className="text-body-secondary">11/01/2024</small></p>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        </>
     );
}

export default Main;