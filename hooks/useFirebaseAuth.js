import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'

export function useFirebaseAuth() {
  const [user, setUser] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user)
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return { isLoading, user }
}
