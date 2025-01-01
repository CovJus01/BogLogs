import React, { useState, useEffect } from "react";
import '../styles/main.css';

export default function PostBox ({ data,key,isReply }) {
    const [reply, setReply] = useState(isReply);

    return (
        <div className="PostBoxContainer">
            <h1>{data.title}</h1>
            <hr className="PostDivider"/>
            <p className="PostQuestion">{data.description}</p>
            <div className="Replies">
                <a className="ReplyHyperlink" href="/">View 0 Replies</a>
                <button className="PostBtn">Reply</button>
            </div>
        </div>
    );
  }
