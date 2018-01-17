import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var post = {
  title: "Dinosaurs are Awesome!",
  author: "Stealthy Stegosaurus",
  body: "Check out this body property!",
  comments: ["First!", "Great post", "Hire this author now!"]
}

class Post extends Component {
  render() {
    return (
      <div className="App">
        <h1>{post.title}</h1>
        <h3>By: {post.author}</h3>
        <p>{post.body}</p>
        <h3>Comments:</h3>
        <p>{post.comments[0]}</p>
      </div>
    );
  }
}

export default Post;
