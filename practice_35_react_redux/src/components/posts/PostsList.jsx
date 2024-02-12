import React, { useEffect, useState } from "react";

export default function PostsList() {

  const [posts, setPosts] = useState([]);

  useEffect( () => {

    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        const data = await response.json();
        setPosts(data);
      }
      catch (error) {
        console.log(error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <h3>Posts List</h3>
      {
        posts.map( post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      }
    </>
  )
}