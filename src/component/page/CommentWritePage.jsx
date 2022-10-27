import React, { useState, useEffect } from "react";
import TextInput from "../Ui/TextInput";
import Button from "../Ui/Button";
import styled from "styled-components";
import CommentList from "../List/CommentList";
import UseFetch from "../../hooks/UseFetch";

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export default function CommentWritepage({ postId }) {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const comments = UseFetch(`http://localhost:3001/comments`);

  useEffect(() => {
    setCommentsList(comments);
    console.log(1);
  }, [comments]);

  function onSubmit(event) {
    event.preventDefault();

    fetch(`http://localhost:3001/comments`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },

      body: JSON.stringify({
        postId: +postId,
        comment: comment,
      }),
    })
      .then((res) => {
        if (res.ok && comment.length > 0) {
          alert("생성이 완료되었습니다.");
          return res.json();
        }
      })
      .then((res) => {
        setCommentsList([...commentsList, res]);
        setComment("");
      });
  }

  function onDelete(id) {
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/comments/${id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          const deleteComments = commentsList.filter((e) => {
            return e.id !== id;
          });

          setCommentsList(deleteComments);
        }
      });
    }
  }

  return (
    <>
      <CommentLabel>댓글</CommentLabel>
      <CommentList
        comments={commentsList}
        postId={postId}
        onDelete={onDelete}
      />

      <form onSubmit={onSubmit}>
        <TextInput
          height={40}
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <Button title="댓글 작성하기" />
      </form>
    </>
  );
}
