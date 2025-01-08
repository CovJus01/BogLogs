import React, {useState, useEffect} from "react";
import '../styles/main.css';
import AdminLogin from "../components/AdminLogin";
import AdminView from "../components/AdminView";

export default function AdminPage () {
    const [postArr, setPostArr] = useState([]);
    
    useEffect(() => {

        //Fetch the results
        fetch("https://boglogs-server-54b9c1de5997.herokuapp.com/post")
        .then((response) => {
            if(!response.ok) {
                throw new Error("Network response was not ok");
                }

            return response.json();
        })
        .then((data) => setPostArr(data))
        .catch((error) => console.error("Fetch error:", error));

    })

    return (
    <>
        <AdminLogin/>
        <div className="AdminSection">
            {postArr.map((post, index) => <AdminView data={post} key={index}/>)}
        </div>
    </>
    );
  }
