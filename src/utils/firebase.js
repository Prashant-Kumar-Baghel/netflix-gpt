// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//Below firebaseConfig helps to access firebase from our react application.
const firebaseConfig = {
  apiKey: "AIzaSyAEw6ENSt9V76YE_NBBXJI1Ek4sablZ_Y0",
  authDomain: "netflixgpt-ba838.firebaseapp.com",
  projectId: "netflixgpt-ba838",
  storageBucket: "netflixgpt-ba838.appspot.com",
  messagingSenderId: "92281332984",
  appId: "1:92281332984:web:68a38b9c272bb10952c70d",
  measurementId: "G-M41RLXDM9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
// the auth variable in the code is like a key that unlocks the door to Firebase's authentication system. It allows the code to interact with Firebase's user authentication features, such as creating new user accounts.
// So, when you call createUserWithEmailAndPassword(auth, email, password), you're using this key (auth) to tell Firebase to create a new user account with the provided email and password.
// Once the user is successfully created, Firebase gives you back another key (userCredential) that contains information about the newly created user, such as their unique ID and email address. You can then use this information to do things like personalize their experience in your app.