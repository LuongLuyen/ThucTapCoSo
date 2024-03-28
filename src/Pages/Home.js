import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Profile from "../Components/Profile";
import Point from "../Components/Point";
function Home() {
    return ( 
        <>
          <Header/>
          <div className="container-fluid main">
            <div className="content">
              <Point/>
            </div>
            <div className="login">
              <Profile/>
            </div>
          </div>
          <Footer/>
        </>
     );
}

export default Home;