import React, {useState, useEffect} from "react";
import '../styles/main.css';
import Post from "../components/Post";
import PostBox from "../components/PostBox"

export default function MainPage () {
    const [postArr, setPostArr] = useState([]);

    useEffect(() => {

        //Fetch the results
        fetch("http://localhost:5000/post")
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
      <div>
        <h2 className="PageTitle">Got Questions?</h2>
        <Post isTitle={true}/>
        <div className="PostSection">
         {postArr.map((post, index) => <PostBox data={post} key={index} isReply={true} />)}
        </div>
        <button className="LoadBtn">Load More</button>
      </div>
    );
  }
