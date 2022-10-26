import React from 'react'
import styled from 'styled-components';

const StyleButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`

export default function Button(props) {
    const { title, onClick } = props;

<<<<<<< HEAD
  return <StyleButton 
              onClick={onClick}
              >{title || "button"}</StyleButton>;
=======
  return <StyleButton onClick={onClick}>{title || "button"}</StyleButton>;
>>>>>>> 30a5b74f45082b9d2b8cea7d7892716f308497b0
}
