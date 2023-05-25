//hooks
import { useState } from "react";
//components
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";

const Landing = ({ login, response, setResponse }) => {
  const [openRegister, setOpenRegister] = useState(false);

  return (
    <div className="">
      <div className="first-page-main">
        {!openRegister && (
          <Login login={login} response={response} setResponse={setResponse} />
        )}

        {!openRegister && (
          <button onClick={() => setOpenRegister(true)} className="sign-up">
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

    </div>
  );
};

export default Landing;
