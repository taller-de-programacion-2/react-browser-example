import { useReducer } from "react";
import { useSession } from "../../contexts/auth/Auth";

const loginReducer = (state, action) => {
  switch (action.type) {
    case "set_field":
      const { field, value } = action;
      return {
        ...state,
        error: "",
        [field]: value,
      };
    case "error":
      const { message } = action;
      return {
        ...state,
        error: message,
        loading: false,
      };
    case "loading":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

const Login = () => {
  const session = useSession();
  const [state, dispatch] = useReducer(loginReducer, {});
  const { email, password, error, loading } = state;

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
    <div>
      <h1>Users</h1>
      <p>See other users profiles</p>
      <div style={{ backgroundColor: "red" }}>{error}</div>
      {loading && <div style={{ backgroundColor: "yellow" }}>Loading ...</div>}
      <div>
        <div>
          <span>email:</span>
          <input
            type="text"
            onChange={setField("email")}
            disabled={loading}
            name="email"
          />
        </div>
        <div>
          <span>password:</span>
          <input
            type="password"
            onChange={setField("password")}
            disabled={loading}
            name="password"
          />
        </div>
        <div>
          <button onClick={doLogin} disabled={loading}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
