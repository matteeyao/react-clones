import React from 'react'
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return <div className="chats">
        <Chat
            name="Mark"
            message="YO whats up!"
            timestamp="40 seconds ago"
            profilePic="https://heelsagency.com/wp-content/uploads/2014/11/Mark-Zuckerberg-Heels-Agency-Demi-Karan-9.jpg"
        />
        <Chat
            name="Elon"
            message="What up luv?"
            timestamp="1 hour ago"
            profilePic="https://africaprime.com/wp-content/uploads/2020/04/ElonMusk.jpg"
        />
        <Chat
            name="Steve"
            message="Apple wants you!"
            timestamp="4 days ago"
            profilePic="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-startupgrind/events/steve-jobs.jpg"
        />
        <Chat
            name="Larry"
            message="Howdy sunshine!"
            timestamp="1 week ago"
            profilePic="http://static8.bornrichimages.com/cdn2/500/500/91/c/wp-content/uploads/2014/07/lar4_thumb.jpg"
        />

    </div>
}

export default Chats
