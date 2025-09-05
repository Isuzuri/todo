import './App.css'
import { useAuth } from './context/authContext'
import Auth from './screens/Auth'
import ToDoList from './screens/ToDoList'

function App() {
  const {isAuthenticated, isLoading} = useAuth()

  if (isLoading) return null

  return (
    <div className='wrap'>
      {isAuthenticated ? <ToDoList /> : <Auth />}
    </div>
  )
}

export default App
