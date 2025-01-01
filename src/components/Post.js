import React, { useState, useEffect } from "react";

export default function Post() {
    const [post, setPost] = useState({title: "", description: "", isParent: true});

    //Sends a Post request with the post content on the server
    const handleSubmit = () => {
        //Post Request
        fetch("http://localhost:5000/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
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
            <input placeholder="Question title..." value={post.title} onChange={(e) => setPost({...post,title:e.target.value})} className="PostTitle" />  <br />
            <textarea placeholder="Explain further if needed..." value={post.description} onChange={(e) => setPost({...post,description:e.target.value})} className="PostInput" /> <br />
            <div className="Flex">
                <div className="FillerDiv"/>
                <button onClick={handleSubmit} className="PostBtn">Post</button>
            </div>
        </div>
    );
}
