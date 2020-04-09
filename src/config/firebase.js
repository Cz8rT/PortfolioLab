import * as firebase from "firebase";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCtUXVbNVUjOmBwYaned-_bhbBwNK3sPb0",
    authDomain: "portfoliolab-cz8rt.firebaseapp.com",
    databaseURL: "https://portfoliolab-cz8rt.firebaseio.com",
    projectId: "portfoliolab-cz8rt",
    storageBucket: "portfoliolab-cz8rt.appspot.com",
    messagingSenderId: "1038635188365",
    appId: "1:1038635188365:web:90d9e69ac84783306b22c4"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;