import React, { useState, useEffect } from "react";
import PostForm from "./PostForm";
import PostsContainer from "./PostsContainer";

export default function FakeApiApp() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        setData(posts.reverse()); // Load data in descending order
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handlePostSubmit = () => {
    if (newPost.title && newPost.body) {
      setData([{ ...newPost, id: Date.now() }, ...data]);
      setNewPost({ title: "", body: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h1>Fake API App</h1>
      <PostForm
        newPost={newPost}
        handleChange={handleChange}
        handleSubmit={handlePostSubmit}
      />
      {loading ? <p>Loading...</p> : <PostsContainer posts={data} />}
    </div>
  );
}
