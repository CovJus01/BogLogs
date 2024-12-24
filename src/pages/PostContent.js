import React from "react";
import '../styles/main.css';
import Post from "../components/Post";
import PostBox from "../components/PostBox"

export default function PostPage () {

    return (
      <div className="ViewPost">
        <PostBox isReply={false}/>
        <br/>
        <br/>
        <Post isTitle={false}/>
        <br/>
        <br/>
        <div className="PostSection">
            <div id="column1">
            <PostBox isReply={false}/>
            <PostBox isReply={false}/>
            <PostBox isReply={false}/>
            </div>
            <div id="column2">
            <PostBox isReply={false}/>
            <PostBox isReply={false}/>
            <PostBox isReply={false}/>
            </div>
            <div id="column2">
            <PostBox isReply={false}/>
            <PostBox isReply={false}/>
            <PostBox isReply={false}/>
            </div>
        </div>
      </div>
    );
  }
