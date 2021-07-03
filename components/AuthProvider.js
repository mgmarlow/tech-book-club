import { createContext, useContext } from 'react'
import { useFirebaseAuth } from '../hooks/useFirebaseAuth'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

function AuthProvider({ children }) {
  const auth = useFirebaseAuth()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default AuthProvider
