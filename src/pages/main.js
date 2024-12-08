import React, { useState } from "react";
import '../styles/main.css';
import Post from "../components/Post";
import PostBox from "../components/PostBox"

export default function MainPage () {
    const [gameNumber, setGameNumber] = useState();
  
    return (
      <div>
        <h2 className="PageTitle">Got Questions?</h2>
        <Post isTitle={true}/>
        <div className="PostSection">
        <div id="column1">
          <PostBox isReply={true}/>
          <PostBox isReply={true}/>
          <PostBox isReply={true}/>
          <PostBox isReply={true}/>
        </div>
        <div id="column2">
          <PostBox isReply={true}/>
          <PostBox isReply={true}/>
          <PostBox isReply={true}/>
          <PostBox isReply={true}/>
        </div>
        <div id="column3">
          <PostBox isReply={true}/>
          <PostBox isReply={true}/>
          <PostBox isReply={true}/>
          <PostBox isReply={true}/>
        </div>
        <div id="column4">
          <PostBox isReply={true}/>
          <PostBox isReply={true}/>
          <PostBox isReply={true}/>
          <PostBox isReply={true}/>
        </div>
        </div>
        <button className="LoadBtn">Load More</button>
      </div>
    );
  }