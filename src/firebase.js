import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyC5f00elbUyzYkXbswpvxOFbcK_k8-iQJs",
	authDomain: "gccp-project-e5cde.firebaseapp.com",
	projectId: "gccp-project-e5cde",
	storageBucket: "gccp-project-e5cde.appspot.com",
	messagingSenderId: "800967944583",
	appId: "1:800967944583:web:fd2c9b016a7012968f0b22",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
