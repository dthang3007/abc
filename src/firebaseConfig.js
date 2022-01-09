import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyB1RV4A5sEaG5ORtOlWQE_Wd-j8mHw3-Sg',
  authDomain: 'xtutor-e75c4.firebaseapp.com',
  projectId: 'xtutor-e75c4',
  storageBucket: 'xtutor-e75c4.appspot.com',
  messagingSenderId: '135862704551',
  appId: '1:135862704551:web:05313ef54e1153bc70be82'
};
firebase.initializeApp(config);

const auth = firebase.auth();
const authGoogle = firebase.auth.GoogleAuthProvider.PROVIDER_ID;
const authFacebook = firebase.auth.FacebookAuthProvider.PROVIDER_ID;
const authGithub = firebase.auth.GithubAuthProvider.PROVIDER_ID;

export { auth, authFacebook, authGoogle, authGithub };
