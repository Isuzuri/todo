import { useState } from 'react';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle login or registration request
  };

  return (
    <>
      <h1>{isRegistering ? 'Register' : 'Login'}</h1>
      <form className='loginForm' onSubmit={handleSubmit}>
        <input type='text' placeholder='Username' required />
        <input type='password' placeholder='Password' required />
        <button type='submit'>
          {isRegistering ? 'Create Account' : 'Login'}
        </button>
        <p className='switchLink'>
          {isRegistering
            ? 'Already have an account? '
            : "Don't have an account? "}
          <a
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? 'Login' : 'Register'}
          </a>
        </p>
      </form>
    </>
  );
};


export default Login