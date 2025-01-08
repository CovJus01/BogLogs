import React, { useState, useEffect } from "react";
import '../styles/main.css';

export default function AdminView ({ data,key }) {
    
    return (
      <div className="PostBoxContainer">
        <h1>{data.title}</h1>
        <hr className="PostDivider"/>
        <p className="PostQuestion">{data.description}</p>
        <div className="AdminButtons">
            <button className="HideBtn">Hide</button>
            <button className="ModifyBtn">Modify</button>
            <button className="DeleteBtn">Delete</button>
        </div>
        <div className="loader" hidden/>
      </div>
    );
  }
