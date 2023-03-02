import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [secret, setSecret] = useState("");

  const handleSubmit = ()=>{
    e.preventDefault();
    console.log('hello ==>')
  }
  return (
    <div className="row py-5">
      <div className="col-md-6 offset-md-3">
        <form>
          <div className="mb-3">
            <small>
              <label className="text-muted">Your name</label>
            </small>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <small>
              <label className="text-muted">Email address</label>
            </small>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              placeholder="email@email.com"
            />
          </div>
          <div className="mb-3">
            <small>
              <label className="text-muted">Password</label>
            </small>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <small>
              <label className="text-muted">Pick a question</label>
            </small>
            <select className="form-control">
              <option>What's your favourite color?</option>
              <option>What's your favourite food?</option>
              <option>What city u have born?</option>
            </select>
            <small className="form-text text-muted">
              you can use it to reset password if forgotten.
            </small>
          </div>
          <div className="form-group mb-3">
            <input
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Wright your answer here"
            />
          </div>

          <button type="submit" className="btn btn-primary col-12">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
