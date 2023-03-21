/* const validation = (userData, errors, setErrors) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)) {
    setErrors({ ...errors, username: "Invalid Email" });
  }
  if (!userData.username) {
    setErrors({ ...errors, username: "Please enter an email address" });
  }
  if (userData.username.length > 35) {
    setErrors({ ...errors, username: "Invalid Email" });
    
  }
  if (!userData.password.match(/^(?=.*\d).{6,10}$/)) {
    setErrors({
      ...errors,
      username:
        "Password must be between 6 and 10 characters and contain at least one number",
    });
  }

  console.log(errors);
  return errors;
};

export default validation; */

/* if (!form.email) setErrors({ ...errors, email: "Email vacío" });
else {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email))
    setErrors({ ...errors, email: "" });
  else setErrors({ ...errors, email: "Email inválido" });
}
}; */
