import React, { useState } from 'react';
import Errormodal from '../UI/ErrorModal';

const UserForm = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] = useState();

  const nameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: '잘못된 입력',
        message: '올바른 이름과 나이를 입력하시오.',
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: '잘못된 나이입력',
        message: '나이를 똑바로 입력하시오.',
      });
      return;
    }

    props.addUser({
      name: userName,
      age: userAge,
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Errormodal
          title={error.title}
          message={error.message}
          onRemoveError={errorHandler}
        />
      )}
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
    </div>
  );
};

export default UserForm;
