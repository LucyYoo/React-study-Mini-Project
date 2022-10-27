import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";
import UseFetch from "../../hooks/UseFetch";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export default function CommentList(props) {
  const { postId, comments, onDelete } = props;

  return (
    <Wrapper>
      {comments &&
        comments.map((comment, index) => {
          if (comment.postId === +postId) {
            return (
              <CommentListItem
                key={comment.id}
                comment={comment}
                onDelete={onDelete}
              />
            );
          }
        })}
    </Wrapper>
  );
}
