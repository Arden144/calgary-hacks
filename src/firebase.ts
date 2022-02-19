import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
	// apiKey: "AIzaSyBZzS3a6H8jcxQXbAQnMKMXQs0kU0WvdRs",
	// authDomain: "calgaryhacks-aaa07.firebaseapp.com",
	// projectId: "calgaryhacks-aaa07",
	// storageBucket: "calgaryhacks-aaa07.appspot.com",
	// messagingSenderId: "38940125148",
	// appId: "1:38940125148:web:e12befbe60f273a0091119"

	apiKey: 'AIzaSyAW215krwMaT2EOLrVfx4Faxfy6eTBy7qw',
	authDomain: 'calgaryhacks2022-64254.firebaseapp.com',
	projectId: 'calgaryhacks2022-64254',
	storageBucket: 'calgaryhacks2022-64254.appspot.com',
	messagingSenderId: '268934585007',
	appId: '1:268934585007:web:7c2aaec945899ccab2525a',
	measurementId: 'G-GHTZ4E1976'
};

export const app = initializeApp(config);
export const auth = getAuth(app);
export const store = getFirestore(app);
