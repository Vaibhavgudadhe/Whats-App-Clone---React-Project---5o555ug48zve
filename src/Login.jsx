import React from 'react';

const Login = () => {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />

      <button type="submit">Log in</button>
    </form>
  );
};

export default Login;
