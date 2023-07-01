import React, { useState } from "react";
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    let re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return re.test(email);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length <= 5 || !validateEmail(email)) {
      setErrorMessage("Por favor verifique su información nuevamente");
      setSuccessMessage("");
    } else {
      console.log(name, email);
      setErrorMessage("");
      setSuccessMessage(<span>Gracias <strong>{name}</strong>, te contactaremos cuanto antes vía correo electrónico.</span>);

    }
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
        </div>
        <div className="form-group mb-3">
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
        </div>
        <input type="submit" className="btn btn-primary mt-3" value="Submit"/>
        {errorMessage && <ErrorMessage message={errorMessage} />}
        {successMessage && <SuccessMessage message={successMessage} />}
      </form>
    </div>
  );
};

export default Form;
