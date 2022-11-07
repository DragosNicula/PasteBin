import React, { useState } from 'react';
import { Register } from './components/User/Register';
import { Login } from './components/User/Login';
import { List } from './components/Paste/List';
import { Home } from './components/Paste/Home';
import { AddPost } from './components/Paste/AddPost';
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
                <Link to="/AddPost">Add Post</Link>
                <a> </a>
                <Link to="/List">List</Link>
                <a> </a>
                <Link to="/Register">Register</Link>
                <a> </a>
                <Link to="/Login">Login</Link>
                <Routes>
                    <Route path="/" element={<Home db={db} allPosts={allPosts} userLoggedIn={userLoggedIn}/>} /> {/* When there is nothing after "/" it goes to home page*/}
                    <Route path="/Home" element={<Home db={db} allPosts={allPosts} userLoggedIn={userLoggedIn} />} /> {/* Home Page Route*/}
                    <Route path="/AddPost" element={<AddPost db={db} allPosts={allPosts} userLoggedIn={userLoggedIn}/>} /> {/* AddPost Page Route*/}
                    <Route path="/List" element={<List db={db} userLoggedIn={userLoggedIn} allPosts={allPosts}/>} /> {/* AddMovie Page Route*/}
                    <Route path="/Register" element={<Register setUserLoggedIn={setUserLoggedIn}/>} /> {/* Register Page Route*/}
                    <Route path="/Login" element={<Login setUserLoggedIn={setUserLoggedIn}/>} />{/* Login Page Route*/}
                </Routes>
            </div>
    )
}