import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Ui/Button";
import PostList from "../List/PostList";
import UseFetch from "../../hooks/UseFetch";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export default function MainPage(props) {
  const post = UseFetch("http://localhost:3001/post");
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <PostList
          posts={post}
          onClickItem={(item) => {
            navigate(`/post/${item.id}`);
          }}
        />
      </Container>
    </Wrapper>
  );
}
