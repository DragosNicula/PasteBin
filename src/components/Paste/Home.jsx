import React from 'react'

export function Home(props) {

    return(
        <div>
            <h1> Welcome to my Pastebin App </h1>
            <h2> Here is a photo with a dog </h2>
            <img src={require('./dog.jpg')} style={{width: "30%", height: "30%"}} />
        </div>
    )
}