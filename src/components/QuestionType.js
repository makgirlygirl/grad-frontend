import React from "react";
import styled from 'styled-components';

const QuestionType = ({checked, onClick, img_unchecked, img_checked}) => (
    <>
    {
        checked ?
        <Type onClick={onClick} src={img_checked} alt="type_checked"/> : 
        <Type onClick={onClick} src={img_unchecked} alt="type_unchecked"/>
    }
    </>
)

const Type = styled.img`    
    padding: 0.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
`;
export default QuestionType;
