
require("dotenv").config()

// To connect with your mongoDB database
const mongoose = require('mongoose');
const url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_KEY}@boglogs.c3qyo.mongodb.net/?retryWrites=true&w=majority&appName=BogLogs`;
mongoose.connect(url);

// Schema for Posts
const PostSchema = new mongoose.Schema({
    isParent: {
        type: Boolean,
        required: true,
        default: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date_created: {
        type: Date,
        default: Date.now,
        required: true,
    }
});

const Post = mongoose.model("Post", PostSchema);

// Backend Server implementation
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

    resp.send("App is Working");
    // You can check backend is working or not by
    // entering http://loacalhost:5000

    // If you see App is working means
    // backend working properly
});


app.post("/post", async (req, resp) => {
    try {
        console.log("Post request");
        const post = new Post(req.body);
        let result = await post.save();
        result = result.toObject();
        resp.send(req.body);
        console.log(result);
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});

app.listen(5000);
