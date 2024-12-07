import React, { useState } from "react";
import '../styles/main.css';
import Post from "../components/Post";
import PostBox from "../components/PostBox"

export default function MainPage () {
    const [gameNumber, setGameNumber] = useState();
  
    return (
      <div>
        <h2 className="PageTitle">Got Questions?</h2>
        <Post/>
        <br/>
        <br/>
        <div className="PostSection">
          <PostBox/>
          <PostBox/>
          <PostBox/>
          <PostBox/>
        </div>
        <button className="LoadBtn">Load More</button>
      </div>
    );
  }