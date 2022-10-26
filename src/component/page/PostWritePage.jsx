import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Button from '../Ui/Button';
import TextInput from '../Ui/TextInput';

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

export default function PostWritePage() {
    const navigate = useNavigate();

    const [title, setTilte] = useState("");
    const [content, setContent] = useState("");

    function onSubmit(event){
        event.preventDefault();

        fetch(`http://localhost:3001/post`, {
            method : 'POST',
            headers : {
                'content-Type' : 'application/json',
            },

            body : JSON.stringify({
                title : title,
                content : content,
            })
        })
        .then(res => {
            console.log(1);
            if(res.ok){
                alert('생성이 완료되었습니다.');
                navigate('/');
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    // const titleref = useRef(null);
    // const contentref = useRef(null);

  return (
    <Wrapper>
        <Container>
            <form onSubmit={onSubmit}>
                <TextInput
                    height={20}
                    value={title}
                    onChange={(event) => {
                        setTilte(event.target.value);
                    }}
                    // ref={titleref}
                />

                <TextInput
                    height={480}
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                    // ref={contentref}
                />

                <Button
                    title="글 작성하기"
                    // onClick={() => {
                    //     navigate("/");
                    //     console.log(3);
                    // }}
                />
            </form>
        </Container>
    </Wrapper>
  )
}
