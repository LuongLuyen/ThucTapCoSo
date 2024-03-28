import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Login from "../Components/Login";
import Main from "../Components/Main";
import { useState } from "react";
function LoginPage() {
  const [message, setMessage] = useState(Boolean)

  const callbackFunction = (childData) => {
    setMessage(childData)
  }
    return ( 
        <>
          <Header parentCallback={callbackFunction}/>
          {message? <Login/>:
          <div className="container-fluid main">
            <div className="content">
              <Main/>
            </div>
            <div className="login">
              <Login/>
            </div>
          </div>
          }
          <Footer/>
        </>
     );
}

export default LoginPage;