// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "interviewiq-b1acb.firebaseapp.com",
    projectId: "interviewiq-b1acb",
    storageBucket: "interviewiq-b1acb.firebasestorage.app",
    messagingSenderId: "518346632533",
    appId: "1:518346632533:web:59b1c65a80164d48e9d3dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Add additional scopes if needed
provider.addScope('email');
provider.addScope('profile');

// Set custom parameters for better popup handling
provider.setCustomParameters({
    prompt: 'select_account'
});

export { auth, provider }