import { useState } from "react";
import { useSession } from "../../contexts/auth/Auth";
import "../../styles/login.scss";

const Login = () => {
  const session = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const doLogin = async (_) => {
    setLoading(true);
    try {
      await session.login({ email, password });
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
    setError("");
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
    setError("");
  };
  return (
    <div className="login-container">
      <div className="inner-wrapper">
        <h1>Users</h1>
        <div style={{ backgroundColor: "red" }}>{error}</div>
        {loading && (
          <div style={{ backgroundColor: "yellow" }}>Loading ...</div>
        )}
        <div className="form">
          <div className="form-control">
            <label>Email</label>
            <input
              type="email"
              onChange={updateEmail}
              disabled={loading}
              name="email"
            />
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              type="password"
              onChange={updatePassword}
              disabled={loading}
              name="password"
            />
          </div>
          <div className="button-wrapper">
            <button onClick={doLogin} disabled={loading}>
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
