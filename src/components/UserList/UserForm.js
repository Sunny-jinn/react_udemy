import React, { useState } from 'react';

const UserForm = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const nameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    props.addUser({
      name: userName,
      age: userAge,
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <h2>Name</h2>
          <input type="text" value={userName} onChange={nameChangeHandler} />
        </div>
        <div>
          <h2>Age (Years)</h2>
          <input type="text" value={userAge} onChange={ageChangeHandler} />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
