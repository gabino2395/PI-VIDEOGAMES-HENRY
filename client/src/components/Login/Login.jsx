//css
import "./Login.css";
//hooks
import { useState, useEffect } from "react";
//
import { loginValidation } from "../../Utils/Validation";
const Login = ({ login, response, setResponse }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      loginValidation({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };


  useEffect(() => {
    setResponse("");
  }, []);

  return (
    <div className="login-main">
      <form onSubmit={handleSubmit} className="  form-login">
        <h2>Login</h2>
        <div className="input-box-login">
          <div>
            <label htmlFor="email">Email</label>
          </div>

          <div>
            <input
              type="email"
              value={userData.email}
              placeholder="Your Email"
              onChange={handleChange}
              name="email"
              className="input-field"
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
        </div>
        <div className="input-box-login">
          <div>
            <label htmlFor="password">Password</label>
          </div>

          <div>
            <input
              type="password"
              value={userData.password}
              placeholder="Your Password"
              onChange={handleChange}
              name="password"
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
        </div>

        <button
          className="comenzar-btn"
          // disabled={buttonDisable(userData, errors)}
        >
          enter
        </button>
      </form>
      {response && (
        <div className="">
          <h2>{response}</h2>
        </div>
      )}
    </div>
  );
};

export default Login;
