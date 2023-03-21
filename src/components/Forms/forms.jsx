import { useState } from "react";
import style from "./Forms.module.css";
import { useEffect } from "react";

const validateUsername = (username) => {
  if (!username) {
    return "Please enter an email address";
  } else if (username.length > 35) {
    return "Username is too long";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(username)) {
    return "Invalid Email";
  } else {
    return "";
  }
};

const validatePassword = (password) => {
  if (!password.match(/^(?=.*\d).{6,10}$/)) {
    return "Password must be between 6 and 10 characters and contain at least one number";
  } else {
    return "";
  }
};

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
  };

  useEffect(() => {
    const usernameError = validateUsername(userData.username);
    const passwordError = validatePassword(userData.password);
    setErrors({ username: usernameError, password: passwordError });
  }, [userData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div>
      <br />
      <br />
      <div className={style.centrado}>
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.contenedor}>
            <h2 className={style.login}>Log In</h2>

            <label htmlFor="username" className={style.email}>
              Email:
            </label>
            <br />
            <input
              type="text"
              value={userData.username}
              name="username"
              onChange={handleInputChange}
              className={errors.username ? style.errorPassword : style.success}
            />
            <div>
              {errors.username && (
                <p className={style.error}>{errors.username}</p>
              )}
            </div>
            <span></span>
          </div>
          <div>
            <label htmlFor="password" className={style.password}>
              Password:
            </label>
            <br />
            <input
              type="password"
              value={userData.password}
              name="password"
              onChange={handleInputChange}
              className={errors.password ? style.errorPassword : style.success}
            />
            {errors.password && (
              <p className={style.error}>{errors.password}</p>
            )}
            <br /> <br />
            <button className={style.button}>Log In</button>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
