import React, { useState } from "react";
import '../styles/main.css';

export default function Post () {
    const [title, setTitle] = useState(true);
    return (
    <div className="PostContainer">
        {title ? <input  className="PostTitle"/> : null} <br/>
        <textarea  className="PostInput"/> <br/>
        <button className="PostBtn"><b>Post</b></button>
    </div>
    );
  }