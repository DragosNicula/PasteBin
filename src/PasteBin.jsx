import React, { useState } from 'react';
import { Register } from './Page/Register';
import { Login } from './Page/Login';
import { List } from './Page/List';
import { Home } from './Page/Home';
import { Link, Routes, Route} from 'react-router-dom';
import { getFirestore } from "firebase/firestore"; 

export default function PasteBin() {
    const [allPosts, setAllPosts] = useState([]);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const db = getFirestore();

    return(
            <div>
                <Link to="/Home">Home</Link>
                <a> </a>
                <Link to="/List">List</Link>
                <a> </a>
                <Link to="/Register">Register</Link>
                <a> </a>
                <Link to="/Login">Login</Link>
                <Routes>
                    <Route path="/" element={<Home db={db} allPosts={allPosts} userLoggedIn={userLoggedIn}/>} /> {/* When there is nothing after "/" it goes to home page*/}
                    <Route path="/Home" element={<Home db={db} allPosts={allPosts} userLoggedIn={userLoggedIn} />} /> {/* Home Page Route*/}
                    <Route path="/List" element={<List db={db} userLoggedIn={userLoggedIn} allPosts={allPosts}/>} /> {/* AddMovie Page Route*/}
                    <Route path="/Register" element={<Register setUserLoggedIn={setUserLoggedIn}/>} /> {/* Register Page Route*/}
                    <Route path="/Login" element={<Login setUserLoggedIn={setUserLoggedIn}/>} />{/* Login Page Route*/}
                </Routes>
            </div>
    )
}