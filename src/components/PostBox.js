import React, { useState, useEffect } from "react";
import '../styles/main.css';

export default function PostBox ({ data,key }) {

    return (
        <div className="PostBoxContainer">
            <h1>{data.title}</h1>
            <hr className="PostDivider"/>
            <p className="PostQuestion">{data.description}</p>
            <div className="Replies">
                <a className="ReplyHyperlink" href="/post">View 0 Replies</a>
                <button className="PostBtn">Reply</button>
            </div>
            <div className="loader" hidden/>
        </div>
    );
  }
