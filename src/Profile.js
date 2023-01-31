import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

function Profile() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogIn = () => {
    setTimeout(() => {
      setLoggedIn(!loggedIn);
    }, 600);
  };

  return (
    <div className='all-center'>
      {loggedIn ? (
        <div>
          <h1>已登入</h1>
          <br />
          <button
            style={{ marginTop: '30px' }}
            className='btn btn-dark'
            onClick={handleLogIn}
          >
            登出
          </button>
        </div>
      ) : (
        <div>
          {' '}
          <h4>帳號:</h4>
          <input
            type='text'
            name='Id'
            placeholder='輸入帳號...'
            style={{ width: '200px' }}
          ></input>
          <br />
          <h4>密碼:</h4>
          <input
            type='password'
            name='password'
            placeholder='輸入密碼...'
            style={{ width: '200px' }}
          ></input>
          <br />
          <FcGoogle size={'60px'} onClick={handleLogIn} />
          <br />
          <button
            style={{ marginTop: '30px' }}
            className='btn btn-dark'
            onClick={handleLogIn}
          >
            登入
          </button>
          <button style={{ marginTop: '30px' }} className='btn btn-dark'>
            辦新帳號
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
