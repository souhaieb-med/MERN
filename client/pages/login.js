
const Login = () => {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
        />
        <div className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">
          Password
        </label>
        <input type="password" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Login