import { useState } from 'react';
import authApi from '../api/auth';
import { useAuth } from '../context/authContext';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '' })
  const { setUser } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = isRegistering ? await authApi.signIn(formData) : await authApi.login(formData)
      setUser(response.data.user)
      setFormData({ username: '', password: '' })
    } catch (error) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <>
      <h1>{isRegistering ? 'Register' : 'Login'}</h1>
      <form className='loginForm' onSubmit={handleSubmit}>
        <input type='text' placeholder='Username' required value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
        <input type='password' placeholder='Password' required value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
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