import React from "react";
import styled from "styled-components";
import Button from "../Ui/Button";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid gray;
  cursor: pointer;
  background: white;
  :hover {
    background: lightgray;
  }
`;

const ContentText = styled.p`
  font-size: 14px;
`;

export default function CommentListItem(props) {
  const { key, comment, onDelete } = props;

  return (
    <Wrapper>
      <ContentText>{comment.comment}</ContentText>
      <Button title="삭제" onClick={() => onDelete(comment.id)} />
    </Wrapper>
  );
}
