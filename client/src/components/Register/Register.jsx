//hooks
import { useState } from "react";
//router
import { useNavigate } from "react-router-dom";
//
import axios from "axios";
import { loginValidation } from "../../Utils/Validation";
import { URL } from "../../Utils/Utils";

const Register = ({ setOpenRegister, login }) => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [response, setResponse] = useState("");

  const [created, setCreated] = useState(false);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
    setErrors(
      loginValidation({ ...newUser, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/heroSection");
    singIn(newUser);
  };

  const singIn = async (newUser) => {
    try {
      const { data } = await axios.post(`${URL}/user/register`, newUser);
      setResponse(data.user);
      setUserData(newUser);
      setCreated(true);
      alert("usuario creado correctamente");
    } catch (error) {
      setResponse(error.response.data.error);
      alert("error en la creacion de usuario");
      console.log(error);
    } finally {
      setNewUser({ ...newUser, email: "", password: "" });
    }
  };

  const buttonDisable = (newUser, errors) => {
    let disable = false;
    if (!newUser.email || !newUser.password) disable = true;
    if (errors.email || errors.password) disable = true;
    return disable;
  };

  const handleMessage = () => {
    setResponse("");
    created && login(userData);
  };

  return (
    <div className="login-main">
      {!response && (
        <form onSubmit={handleSubmit} className="form-login">
          <h2>Register</h2>
          <div className="input-box-login">
            <div>
              <label htmlFor="email">Email</label>
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={newUser.email}
                placeholder="Enter your email"
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
          </div>
          <div className="input-box-login">
            <div>
              <label htmlFor="password">Password:</label>
            </div>

            <div>
              <div>
                <em className="details-password">
                  (6 - 30 characters and 1 number)
                </em>
              </div>
              <input
                type="password"
                name="password"
                value={newUser.password}
                placeholder="Enter your password"
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
          </div>
          <button
            type="submit"
            className="comenzar-btn"
            disabled={buttonDisable(newUser, errors)}
          >
            Sign up
          </button>
          <button
            type="button"
            className="comenzar-btn"
            onClick={() => setOpenRegister(false)}
          >
            Already have an account?
          </button>
        </form>
      )}
      {response && (
        <div className={style.response}>
          <h2 className="input-field">{response}</h2>
          <button onClick={handleMessage}>OK</button>
        </div>
      )}
    </div>
  );
};

export default Register;
