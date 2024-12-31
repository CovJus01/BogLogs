import React, { useState, useEffect } from "react";

export default function Reply() {
    const [reply, setReply] = useState({title: "", description: "", isParent: false});
    //Sends a Post request with the post content on the server
    const handleSubmit = () => {
        fetch("localhost:5000/reply", {
        method: "POST",
        headers: {
            "Content-Type": "application-json",
            },
        body: JSON.stringify(reply),
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
            <textarea className="PostInput" /> <br />
            <div className="Flex">
                <div className="FillerDiv"/>
                {<button className="PostBtn">Reply</button>}
            </div>
        </div>
    );
}
