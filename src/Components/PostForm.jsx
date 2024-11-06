import React from "react";

export default function PostForm({ newPost, handleChange, handleSubmit }) {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#444",
        color: "#fff",
        borderRadius: "10px",
      }}
    >
      <h2>Post Form</h2>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={newPost.title}
          onChange={handleChange}
          style={{ margin: "10px", padding: "5px", width: "100%" }}
        />
      </label>
      <label>
        Body:
        <input
          type="text"
          name="body"
          value={newPost.body}
          onChange={handleChange}
          style={{ margin: "10px", padding: "5px", width: "100%" }}
        />
      </label>
      <button
        onClick={handleSubmit}
        style={{ padding: "10px", backgroundColor: "#000", color: "#fff" }}
      >
        Submit
      </button>
    </div>
  );
}
