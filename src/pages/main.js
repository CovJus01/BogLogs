import React, { useState } from "react";
import '../styles/main.css';
import Post from "../components/Post";

export default function MainPage () {
    const [gameNumber, setGameNumber] = useState();
  
    return (
      <div>
        <h2 className="PageTitle">Got Questions?</h2>
        <Post/>
      </div>
    );
  }