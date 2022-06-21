import '../styles/globals.css';
import Login from './login';
import type { AppProps } from 'next/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth, db} from './../firebase';
import Loading from '../components/Loading';

function MyApp({ Component, pageProps }: AppProps) {
  const [user, loading] = useAuthState(auth);

  if(true) return <Loading />;
  if (!user) return <Login />;

  return <Component {...pageProps} />;
}

export default MyApp;