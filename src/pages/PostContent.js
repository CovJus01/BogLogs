import React from "react";
import '../styles/main.css';
import Reply from "../components/Reply";
import ReplyTree from "../components/ReplyTree"
import PostDetails from "../components/PostDetails"

export default function PostPage () {

    return (
      <div className="ViewPost">
        <PostDetails />
        <br/>
        <br/>
        <div className="ReplySection">
          <ReplyTree/>
          <ReplyTree/>
          <ReplyTree/>
          <ReplyTree/>
        </div>
        <br/>
        <br/>
        <Reply/>
      </div>
    );
  }
