// LoginPage.jsx
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmit, setSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setErrorMessage('Please enter both username and password');
      setSubmit(false);
    } else if (username === 'user' && password === 'password') {
      setErrorMessage('');
      setSubmit(true);
      console.log('Logged in successfully');
    } else {
      setSubmit(false);
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {isSubmit ? (
        <p>Welcome, user!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Login;
