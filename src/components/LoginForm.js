import { useState, useRef, useEffect } from "react";

const initialState = {
  username: "",
  password: "",
};
const apiUrl = "http://localhost:4000";

const LoginForm = ({setForm}) => {
  const [token, setToken] = useState(localStorage.getItem("Token"));
  const userRef = useRef();
  const errRef = useRef();
  const [log, setLog] = useState(initialState);

  const [errMsg, setErrMsg] = useState("dcwjc w");

  useEffect(() => {
    setErrMsg("");
  }, [log.username, log.password]);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    try {
      const logInDetails = {
        username: log.username,
        password: log.password,
      };

      const options = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logInDetails),
      };

      fetch(`${apiUrl}/users/login`, options)
        .then((res) => {
          if (res.status === 201) {
            return res.json();
          }
          if (!res.ok) {
            throw Error("401: Invalid Username or Password");
          }
          console.log(res.status);
        })
        .then((data) => {
          localStorage.setItem("Token", data.token);
          setToken(data.token);
          console.log(data);
        });
      e.target.reset();
    } catch (error) {
        console.log(error)
    }
    // navigate('/familyTree')
  };

    return (
        <>
      <section className="loginForm" >
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Log In</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setLog({ ...log, username: e.target.value })}
            value={log.username}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setLog({ ...log, password: e.target.value })}
            value={log.password}
            required
          />
          <button
            disabled={
              log.username.length < 4 || log.password.length < 4 ? true : false
            }
          >
            Log in
          </button>
        </form>
        <p>
          Don't have an account?
          <br />
          <button onClick={(e) => {setForm('register')}} >Register here</button>
        </p>
      </section>
        </>
    )
}

export default LoginForm;