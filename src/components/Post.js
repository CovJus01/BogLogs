import React, { useState, useEffect } from "react";

export default function Post({ isTitle }) {
    const [title, setTitle] = useState(isTitle);

    useEffect(() => {
        setTitle(isTitle);
    }, [isTitle]);

    return (
        <div className="PostContainer">
            {title ? <input className="PostTitle" /> : null} <br />
            <textarea className="PostInput" /> <br />
            <div className="Flex">
                <div className="FillerDiv"/>
                {title ? <button className="PostBtn">Post</button> : <button className="PostBtn">Reply</button>}
            </div>
        </div>
    );
}
