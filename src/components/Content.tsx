import React from "react";
import { Status } from "../redux/slices/posts.Slice";
import { RootState, useAppSelector } from "../redux/store";

type IContentProps = {
  value: string;
};

const Content: React.FC<IContentProps> = ({ value }) => {
  const data = useAppSelector((state: RootState) => state);
  const status = useAppSelector((state: RootState) => state.posts.status);

  const filterPosts = data.posts.posts.filter((post) => {
    return (
      post.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      post.body.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
  });

  if (status === "loading") {
    return (
      <tbody>
        <tr className="fetchingWrap">
          <td className="id"></td>
          <td className="itemHeader fetchig">fetching...</td>
          <td className="description"></td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {value
        ? filterPosts.map((post) => {
            return (
              <tr key={post.id}>
                <td className="id">{post.id}</td>
                <td className="itemHeader">{post.title}</td>
                <td className="description">{post.body}</td>
              </tr>
            );
          })
        : data.posts.posts.map((post) => {
            return (
              <tr key={post.id}>
                <td className="id">{post.id}</td>
                <td className="itemHeader">{post.title}</td>
                <td className="description">{post.body}</td>
              </tr>
            );
          })}
    </tbody>
  );
};

export default Content;
