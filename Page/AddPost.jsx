import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { app } from '../Firebase'
import Button from 'react-bootstrap/Button';
import { collection, addDoc, getDocs } from "firebase/firestore"; 

export function AddPost(props) {
    const [title, setTitle] = useState(' ');
    const [message, setMessage] = useState(' ');
    const data = {
        titlu: title,
        mesaj: message
    }

    const posts = collection(props.db, 'posts')
    async function addPostInDataBase() {
        if (props.userLoggedIn === true) {
            if(title !== ' ' && message !== ' ') {
                const newDoc = await addDoc(posts, data).then(docRef => {
                alert("Your post has been submited")
                })
                .catch(error => {
                    console.log(error);
                });
            } else {
                alert("Title and Message must be filled!");
            }
        } else {
            alert("You must Login first");
        }
    }

    async function getData() {
        const querySnapshot = await getDocs(collection(props.db, "posts"));
        querySnapshot.forEach((doc) => {
            props.allPosts.push(doc.data());
        });
    }

    return(
        <div>
            <Form style={{ width: "50%", margin: "5% auto" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Your Title" onChange={(e) => setTitle(e.target.value)}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={15} placeholder="Your Message" onChange={(e) => setMessage(e.target.value)}/>
                </Form.Group>
            </Form>
            <Button variant="primary" type="submit" onClick={() => {addPostInDataBase(); getData()}}>
                Submit
            </Button>
        </div>
    )
}

