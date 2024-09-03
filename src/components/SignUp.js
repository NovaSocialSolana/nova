import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();



function SignUp() {
  const [user, setUser] = useState(null);

  const signUpWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log('User signed in:', user);
      }).catch((error) => {
        console.error('Error:', error.code, error.message);
      });

      
  };

  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      {user ? (
        <div className="user-info">
          <h2>Welcome, {user.displayName}!</h2>
          <p>You're now signed in with your Google account.</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <div className="sign-up-container">
          <p>Get started by signing up with your Google account.</p>
          <button onClick={signUpWithGoogle} className="google-sign-up-btn">
            Sign up with Google
          </button>
        </div>
      )}
    </div>
  );
}

export default SignUp;