import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components'
import Button from '../Ui/Button';
import TextInput from '../Ui/TextInput';
import CommentList from '../List/CommentList';
import data from '../../data.json'
import UseFetch from '../../hooks/UseFetch';

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
        :not(:last-child){
            margin-bottom: 16px;
        }
    }
`;

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid gray;
    border-radius: 8px;
`;

const TitleText = styled.p`
    font-size: 20px;
    font-weight: 500;
`;

const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
`

export default function PostViewPage(props) {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [comment, setComment] = useState("");
    // const [post, setPost] = useState("");
    
    const write = UseFetch(`http://localhost:3001/post/${postId}`);
    
    function onDelete(){
        if(window.confirm('삭제하시겠습니까?')){
            fetch(`http://localhost:3001/post/${postId}`,{
                method: 'DELETE'
            }).then(res => {
                if(res.ok){
                    navigate('/');
                }
            })
        }
    }
    
    // if(post.id === 0) {
    //     return null;
    // }
    
  return (
    <Wrapper>
        <Container>
            <Button
                title='뒤로 가기'
                onClick={() => {
                    navigate("/");
                }}
            />
            <Button
                title='삭제'
                onClick={onDelete}
            />
            <PostContainer>
                <TitleText>{write.title}</TitleText>
                <ContentText>{write.content}</ContentText>
            </PostContainer>

            <CommentLabel>댓글</CommentLabel>
            <CommentList comments={write.comments} />

            <TextInput
                height={40}
                value={comment}
                onChange={(event) => {
                    setComment(event.target.value);
                }}
            />
            <Button
                title="댓글 작성하기"
                onClick={() => {
                    navigate("/");
                }}
            />
        </Container>
    </Wrapper>
  )
}
