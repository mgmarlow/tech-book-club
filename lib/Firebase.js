import { getApps, initializeApp } from 'firebase/app'
import {
  getAuth,
  GithubAuthProvider,
  signInWithRedirect,
  signOut,
} from 'firebase/auth'
import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_SENDER_ID,
} from '../constants/env'

class Firebase {
  static initialize() {
    if (getApps().length > 0) {
      return
    }

    const firebaseConfig = {
      apiKey: FIREBASE_API_KEY,
      authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
      databaseURL: `https://${FIREBASE_PROJECT_ID}.firebaseio.com`,
      projectId: FIREBASE_PROJECT_ID,
      storageBucket: `${FIREBASE_PROJECT_ID}.appspot.com`,
      messagingSenderId: FIREBASE_SENDER_ID,
      appId: FIREBASE_APP_ID,
    }

    initializeApp(firebaseConfig)
  }

  static signIn() {
    const provider = new GithubAuthProvider()
    const auth = getAuth()
    signInWithRedirect(auth, provider)
  }

  static signUserOut() {
    const auth = getAuth()
    signOut(auth)
  }
}

export default Firebase
