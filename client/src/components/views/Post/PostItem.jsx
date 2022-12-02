import React from "react";

const PostItem = (props) => {
    const { post } = props;
  return (
    <tr>
      <td>
        <a href={`/posts/${post._id}`}>
          <div className="ellipsis">{post.title}</div>
        </a>
      </td>
      <td className="date">
        <span>{post.createdAt}</span>
      </td>
    </tr>
  );
};

export default PostItem;