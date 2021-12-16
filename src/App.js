import React, { useState } from 'react';

import './App.css';
import UserForm from './components/UserList/UserForm';
import User from './components/UserList/User';

const App = () => {
  const ex_list = [];

  const [userList, setUserList] = useState(ex_list);

  const addUser = (info) => {
    setUserList((prevState) => {
      return [...prevState, info];
    });
  };

  return (
    <div>
      <UserForm addUser={addUser} />
      <User items={userList} />
    </div>
  );
};
export default App;
