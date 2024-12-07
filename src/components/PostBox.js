import React, { useState } from "react";
import '../styles/main.css';

export default function PostBox () {
    return (
        <div className="PostBoxContainer">
            <h1>Post Title</h1>
            <hr className="PostDivider"/>
            <p className="PostQuestion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget maximus justo.</p>
            <a className="ReplyHyperlink" href="#">View 0 Reviews</a>
            <button className="PostBtn">Reply</button>
        </div>
    );
  }