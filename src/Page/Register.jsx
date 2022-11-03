import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function createUser() {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then((UseCredential) => {
            const user = UseCredential.user;
            props.setUserLoggedIn(true);
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
                    <Card.Title style={{marginTop: "15px"}}>Create Your PasteBin Account</Card.Title>
                    <InputGroup className="mb-3" style={{ width: "50%", margin: "20px auto" }}>
                        <InputGroup.Text>Email</InputGroup.Text>
                        <Form.Control aria-label="Email" type="text" onChange={(e) => setEmail(e.target.value)} />
                    </InputGroup>
                    <InputGroup className="mb-3" style={{ width: "50%", margin: "20px auto" }}>
                        <InputGroup.Text>Password</InputGroup.Text>
                        <Form.Control aria-label="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                    </InputGroup>
                    <Button variant="outline-primary" onClick={() => createUser()}>Register</Button>{' '}
                </Card.Body>
            </Card>
        </div>
        
    )
}