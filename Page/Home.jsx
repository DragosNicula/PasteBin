import React, { useState } from 'react'
import { AddPost } from './AddPost'

export function Home(props) {

    return(
        <div>
            <AddPost db={props.db} allPosts={props.allPosts} userLoggedIn={props.userLoggedIn} />
        </div>
    )
}