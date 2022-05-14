import { useReducer } from "react";
import { useSession } from "../../contexts/auth/Auth";
import "../../styles/login.scss";

const loginReducer = (state, action) => {
  switch (action.type) {
    case "set_field":
      const { field, value } = action;
      return {
        ...state,
        message: "",
        status: "ready",
        [field]: value,
      };
    case "error":
      const { message } = action;
      return {
        ...state,
        message: message,
        status: "error",
      };
    case "loading":
      return {
        ...state,
        status: "loading",
      };
    default:
      return state;
  }
};

const Login = () => {
  const session = useSession();
  const [{ email, password, status, message }, dispatch] = useReducer(
    loginReducer,
    {}
  );

  const loading = status === "loading";
  const error = status === "error";

  const doLogin = async (_) => {
    dispatch({ type: "loading" });
    try {
      await session.login({ email, password });
    } catch ({ message }) {
      dispatch({ type: "error", message });
    }
  };
  const setField =
    (field) =>
    ({ target: { value } }) =>
      dispatch({ type: "set_field", field, value });

  return (
    <div className="login-container">
      <div className="inner-wrapper">
        <h1>Users</h1>
        {error && <div style={{ backgroundColor: "red" }}>{message}</div>}
        {loading && (
          <div style={{ backgroundColor: "yellow" }}>Loading ...</div>
        )}
        <div className="form">
          <div className="form-control">
            <label>Email</label>
            <input
              type="email"
              onChange={setField("email")}
              disabled={loading}
              name="email"
            />
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              type="password"
              onChange={setField("password")}
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
