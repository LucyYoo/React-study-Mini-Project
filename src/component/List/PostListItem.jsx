import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 8px;
  cursor: pointer;
  background: white;
  :hover {
    background: lightgray;
  }
`

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`
export default function PostListItem(props) {
  const { post, onClick } = props;

  return (
    <Wrapper onClick={onClick}>
<<<<<<< HEAD
        <TitleText>{post.title}</TitleText>
=======
        <TitleText>{post.tilte}</TitleText>
>>>>>>> 30a5b74f45082b9d2b8cea7d7892716f308497b0
    </Wrapper>
  )
}