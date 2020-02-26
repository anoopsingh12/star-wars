import createHistory from 'history/createBrowserHistory';
import React, { useState } from 'react';
import './UserLogin.css';

const history = createHistory();

const UserLogin = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const checkButtonDisabled = id.length > 0 && password.length > 0;

  const handleSubmit = () => {
    history.push('/planet');
  }
    return (
      <div className="flex-container">
        <form className="form" onSubmit={handleSubmit}>
          <label>User Id</label>
          <input
            name="userId"
            type="text"
            placeholder="Enter user id"
            onChange={evt => setId(evt.target.value)}
          />

          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={evt => setPassword(evt.target.value)}
          />
          <button type="submit" disabled={!checkButtonDisabled}>
            Login
          </button>
        </form>
      </div>
    );
}

export default UserLogin;