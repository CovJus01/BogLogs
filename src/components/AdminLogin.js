import React, { useState, useEffect } from "react";
import '../styles/main.css';

export default function AdminLogin () {
    
    return (
      <div className="LoginContainer">
        <h1>Braindamager Login</h1>
        <input className="LoginInput" placeholder="Username"/>
        <input className="LoginInput" type="password" placeholder="Password"/>
        <button className="Loginbtn">Login</button>
      </div>
    );
  }
