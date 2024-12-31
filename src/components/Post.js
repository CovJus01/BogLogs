import React, { useState, useEffect } from "react";

export default function Post() {
    const [post, setPost] = useState({title: "", description: ""});


    //Sends a Post request with the post content on the server
    const handleSubmit = () => {
        fetch("localhost:5000/post", {
        method: "POST",
        headers: {
            "Content-Type": "application-json",
            },
        body: JSON.stringify(post),
        })
        .then((response) => {
            if(!response.ok) {
                throw new Error("Network response was not ok");
                }

            return response.json();
        })
        .then((data) => console.log(data))
        .catch((error) => console.error("Fetch error:", error));

        console.log("Posting to the Server!");
    }
    return (
        <div className="PostContainer">
            <input className="PostTitle" />  <br />
            <textarea className="PostInput" /> <br />
            <div className="Flex">
                <div className="FillerDiv"/>
                <button className="PostBtn">Post</button>
            </div>
        </div>
    );
}
