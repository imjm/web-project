import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const New = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    // fetch에 옵션 지정하여 서버에 요청을 전달한다.
    await fetch(`http://localhost:5000/posts/`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // 수정 후 이전페이지로 돌아가기
    navigate(`/posts/`);
  }

  return (
    <div className="container mb-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb p-1 pl-2 pr-2">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/posts">Board</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Post
          </li>
        </ol>
      </nav>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={form.title}
            onChange={(e) => updateForm({ title: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            rows="5"
            className="form-control"
            value={form.content}
            onChange={(e) => updateForm({ content: e.target.value })}
          ></textarea>
        </div>
        <div>
          <a className="btn btn-primary" href={`/posts/`}>
            Back
          </a>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default New;