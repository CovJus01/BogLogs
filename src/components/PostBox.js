import React, { useState, useEffect } from "react";
import '../styles/main.css';

export default function PostBox ({ isReply }) {
    const [reply, setReply] = useState(isReply);

    useEffect(() => {
        setReply(isReply);
    }, [isReply]);
    console.log(reply)
    return (
        <div className="PostBoxContainer">
            <h1>Post Title</h1>
            <hr className="PostDivider"/>
            <p className="PostQuestion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget maximus justo.</p>
            <div className="Replies">
                { isReply? <a className="ReplyHyperlink" href="/">View 0 Reviews</a> : null}
                { isReply? <button className="PostBtn">Reply</button> : null}
            </div>
        </div>
    );
  }
