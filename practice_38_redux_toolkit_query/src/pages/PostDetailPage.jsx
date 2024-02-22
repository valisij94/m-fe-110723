import React from "react";
import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../store/slices/apiSlice";

export default function PostDetailPage() {

  const { id } = useParams();

  const { data, isLoading, isError, error } = useGetPostByIdQuery(id);

  return (
    <>
      <h2>Post info</h2>
      { isLoading && <p>Please, wait - we are loading the post data!!!</p>}
      { isError && <p>Something went wrong with post: {error.error}</p>}
      {
        data && <>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </>
      }
    </>
  );
}