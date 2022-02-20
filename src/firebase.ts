import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBZzS3a6H8jcxQXbAQnMKMXQs0kU0WvdRs",
  authDomain: "calgary-hacks.vercel.app",
  projectId: "calgaryhacks-aaa07",
  storageBucket: "calgaryhacks-aaa07.appspot.com",
  messagingSenderId: "38940125148",
  appId: "1:38940125148:web:e12befbe60f273a0091119"
}

export const app = initializeApp(config);
export const auth = getAuth(app);
export const store = getFirestore(app);
