import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  // 파라미터를 받기 위해 사용
  const params = useParams();

  // 페이지 이동을 위해 사용
  const navigate = useNavigate();

  // 폼 상태를 관리한다.
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  // url로 넘어온 파라미터를 이용하여 특정 포스트의 내옹을 DB에서 불러온다
  async function fetchData() {
    const id = params.id.toString();
    const response = await fetch(`http://localhost:5000/posts/${id}`);
    if (!response.ok) {
      const message = `An error has occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const post = await response.json();

    // 불러온 포스트의 내용을 상태저장
    setForm(post);
  }

  // 폼 제출 시 이벤트
  async function onSubmit(e) {
    e.preventDefault();
    const editedPost = {
      title: form.title,
      content: form.content,
    };

    // fetch에 옵션 지정하여 서버에 요청을 전달한다.
    await fetch(`http://localhost:5500/posts/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(editedPost),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // 수정 후 이전페이지로 돌아가기
    navigate(`/posts/${form._id}`);
  }

  // 폼 상태 변화 제어
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

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
          <li className="breadcrumb-item">
            <a href={`/posts/${form._id}`}>{form.title}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Post
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
          <a className="btn btn-primary" href={`/posts/${form._id}`}>
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

export default Edit;