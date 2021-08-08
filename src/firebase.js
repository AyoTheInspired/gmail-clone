import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAuBpgoNdy6y_YqKaVhrYc1sabxyoyBOJg",
	authDomain: "clone-5bc17.firebaseapp.com",
	projectId: "clone-5bc17",
	storageBucket: "clone-5bc17.appspot.com",
	messagingSenderId: "363359359640",
	appId: "1:363359359640:web:362969f2a1d3381c97b6ed",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
