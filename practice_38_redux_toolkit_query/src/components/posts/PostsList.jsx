import React from "react";
import { useGetPostsQuery } from "../../store/slices/apiSlice";
import { Link } from "react-router-dom";

export default function PostsList() {

  const {data, isLoading, isError, error} = useGetPostsQuery();

  return (
    <>
      <h3>Posts List</h3>
      { isLoading && <p>Please, wait!!!</p>}
      { isError && <p>Something went wrong: {error.error}</p>}
      {
        data && data.map( post => (
            <div key={post.id}>
              <Link to={`${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
              <p>{post.body}</p>
            </div>
        ))
      }
    </>
  )
}