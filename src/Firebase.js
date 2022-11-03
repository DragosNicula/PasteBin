import { initializeApp } from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDAmZjV_cVyMu6PKYTx7EolCn3dF60wIzk",
    authDomain: "imdb-clone-49309.firebaseapp.com",
    projectId: "imdb-clone-49309",
    storageBucket: "imdb-clone-49309.appspot.com",
    messagingSenderId: "18087099177",
    appId: "1:18087099177:web:35f273728afbdca0fe5538",
    measurementId: "G-N8H1RD0MZS"
};

export const app = initializeApp(firebaseConfig);
