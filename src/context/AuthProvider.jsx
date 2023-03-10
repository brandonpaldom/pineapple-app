import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const initialState = {
  logged: false,
}

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return user ? { logged: true, user } : { logged: false }
}

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState, init)

  const login = (name, email) => {
    const user = { name, email }
    localStorage.setItem('user', JSON.stringify(user))
    dispatch({ type: 'login', payload: user })
  }

  const logout = () => {
    localStorage.removeItem('user')
    dispatch({ type: 'logout' })
  }

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
