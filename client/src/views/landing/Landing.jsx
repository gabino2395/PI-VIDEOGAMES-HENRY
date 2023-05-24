// import { Login, Register } from "../../Components";
import { useState } from "react";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
// import style from "./Landing.module.css";

const Landing = ({ login, response, setResponse }) => {
  const [openRegister, setOpenRegister] = useState(false);

  return (
    <div className="">
      <div className="first-page-main">
        {!openRegister && (
          <Login login={login} response={response} setResponse={setResponse} />
        )}

        {!openRegister && (
          <button
            onClick={() => setOpenRegister(true)}
            className="sign-up"
          >
            Sign Up
          </button>
        )}

        <div>
          {openRegister && (
            <Register
              className=""
              setOpenRegister={setOpenRegister}
              login={login}
            />
          )}
        </div>
      </div>

      <div className=""></div>
    </div>
  );
};

export default Landing;
