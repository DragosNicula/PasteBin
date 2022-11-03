import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export function Login(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    function login() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            props.setUserLoggedIn(true);
            alert("Login succesfull!");
        }).catch((error) => {
            alert(error.message);
        })
    }

    return(
        <div>
            <br></br>
            <br></br>
            <Card style={{ width: "50%", margin: "20px auto" }}>
                <Card.Body>
                    <img src={require('./aaa.jpg')} width="10%" height="11%" />
                    <Card.Title style={{marginTop: "15px"}}>Login with your PasteBin Account</Card.Title>
                    <InputGroup className="mb-3" style={{ width: "50%", margin: "20px auto" }} onChange={(e) => setEmail(e.target.value)}>
                        <InputGroup.Text>Email</InputGroup.Text>
                        <Form.Control aria-label="Email" type="text" />
                    </InputGroup>
                    <InputGroup className="mb-3" style={{ width: "50%", margin: "20px auto" }} onChange={(e) => setPassword(e.target.value)}>
                        <InputGroup.Text>Password</InputGroup.Text>
                        <Form.Control aria-label="Password" type="password" />
                    </InputGroup>
                    <Button variant="outline-primary" onClick={() => login()}>Login</Button>
                </Card.Body>
            </Card>
        </div>
    )
}