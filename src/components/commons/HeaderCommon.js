import "./Commons.css";
import { React, Suspense, useState} from "react";
import { Menu, Button } from "antd";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "antd/dist/antd.css";

import Login from "../login/Login";
import Error from "./Error";
import Register from "../register/Register";
import Home from "../home/Home";
// const Login = React.lazy(() => import("../login/Login"));
// const Error = React.lazy(() => import("./Error"));
// const Register = React.lazy(() => import("../register/Register"));
// const Home = React.lazy(() => import("../home/Home"));


function HeaderCommon() {
  const [currentAccount, setCurrentAccount] = useState(window.localStorage.getItem("currentAccount"))
  const Logout = () => {
    if(window.localStorage.getItem('currentAccount')) {
      window.localStorage.removeItem('currentAccount');
    }
    setCurrentAccount(null);
  }

  return (
    
    <Router>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="login-logout" className="login_logout_button">
          {
            currentAccount ?  (
              <Link onClick={Logout}>Đăng xuất</Link>
            ) : (
              <Link to="/login">Đăng nhập</Link>
            )
          }
        </Menu.Item>
      </Menu>
      <Suspense fallback={<div>Loading...</div>}>
      <Switch orientation="right">
      <Route path="/home" component={Home} />
        <Route path="/login" 
            render={(props) => {
              if(currentAccount) {
                return <Home />
              } else {
                return <Login setCurrentAccount={setCurrentAccount} />;
              }
            }}
         />
        <Route path="/register" component={Register} />
        <Route path="/:somestring" component={Error} />
      </Switch>
      </Suspense>
    </Router>
  );
}

export default HeaderCommon;
