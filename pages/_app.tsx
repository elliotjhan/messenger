import '../styles/globals.css';
import Login from './login';
import type { AppProps } from 'next/app';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth, db} from './../firebase';
import Loading from '../components/Loading';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      db.collection('users').doc(user.uid).set({
        email: user.email,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        photoURL: user.photoURL,
      },
      { merge: true}
      );
    }
  }, [user]);

  if (loading) return <Loading />;
  if (!user) return <Login />;

  return <Component {...pageProps} />;
}

export default MyApp;
