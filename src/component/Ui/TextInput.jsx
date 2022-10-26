import React from 'react'
import styled from 'styled-components'

const StyledTextarea = styled.textarea`
    width: calc(100% - 32px);
    ${(props) => 
        props.height &&
        `
        height: ${props.height}px;
    `}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
    resize: none;
`
export default function TextInput(props) {
    const { height, value, onChange, ref} = props;

  return <StyledTextarea height={height} value={value} onChange={onChange} ref={ref} />;
}
