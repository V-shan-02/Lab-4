import React from "react";

export default function PostCard({ title, body }) {
  return (
    <div
      style={{
        padding: "20px",
        margin: "10px 0",
        backgroundColor: "#555",
        color: "#fff",
        borderRadius: "10px",
      }}
    >
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
