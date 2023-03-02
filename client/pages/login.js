import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submit ==>")
    axios
      .post("http://localhost:8000/login", {
        email,
        password,
      })
      .then((res)=>console.log(res))
      .catch((err)=>console.log("ERROR ==>",err));
  };
  return (
    <div className="row py-5">
      <div className="col-md-6 offset-md-3">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <small>
              <label className="text-muted">Email address</label>
            </small>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="form-control"
              placeholder="Your Address Plz"
            />
            <div className="form-text ">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <small>
              <label className="text-muted">Password</label>
            </small>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

export default Login;
