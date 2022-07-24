import React from 'react';

const User = (props) => {
  return (
    <div>
      {props.items.length === 0 ? (
        <p>No User</p>
      ) : (
        props.items.map((list) => (
          //   <UserList key={Math.random()} name={list.name} age={list.age} />
          <div key={Math.random()}>
            {list.name} ({list.age} years old)
          </div>
        ))
      )}
    </div>
  );
};

export default User;
