import { useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext';
import authApi from '../../api/authApi.js'
import s from './style.module.css'

const AuthForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({ username: '', password: '' })
  const { setUser } = useAuth()

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    try {
      const response = isRegistering ? await authApi.signIn(formData) : await authApi.login(formData)
      setUser(response.data.user)
      setFormData({ username: '', password: '' })
    } catch (error) {
      const msg = error.response?.data?.error || 'Unexpected error';
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <>
      <h1>{isRegistering ? 'Register' : 'Login'}</h1>
      <form className={s.loginForm} onSubmit={handleSubmit}>
        <input type='text' placeholder='Username' required value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
        <input type='password' placeholder='Password' required value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <div className={s.error}>{errorMessage}</div>
        <button type='submit' disabled={isSubmitting}>
          {isRegistering ? 'Create Account' : 'Login'}
        </button>
        <p>
          {isRegistering
            ? 'Already have an account? '
            : "Don't have an account? "}
          <a role='button'
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? 'Login' : 'Register'}
          </a>
        </p>
      </form>
    </>
  )
}

export default AuthForm