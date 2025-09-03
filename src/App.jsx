import './App.css'
import { useAuth } from './context/authContext'
import Login from './screens/Login'
import ToDoList from './screens/ToDoList'

function App() {
  const {isAuthenticated} = useAuth()

  return (
    <div className='wrap'>
      {isAuthenticated ? <ToDoList /> : <Login />}
    </div>
  )
}

export default App
