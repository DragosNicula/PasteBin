import React from 'react'
import Card from 'react-bootstrap/Card';

export function List(props) {
    const listOfPosts = props.allPosts;
    if (listOfPosts !== undefined) {
        const listItems = listOfPosts.map(function(element) {
            return (
                <div>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">Titlu</Card.Subtitle>
                            <Card.Title>{element.titlu}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Message</Card.Subtitle>
                            <Card.Text>
                                {element.mesaj}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
        );
    },);
    
    return (
    <div style={{ width: "50%", margin: "30px auto" }}>
        <h2>List of posts</h2>
        <div>
            {listItems}
        </div>
        
    </div>
    )
}
}