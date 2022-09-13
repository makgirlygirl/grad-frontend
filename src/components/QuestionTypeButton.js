import React, { useState } from "react";
import styled from 'styled-components';

const QuestionTypeButton = ({id, onClick, img_unchecked, img_checked}) => {
    const [isChecked, setIsChecked] = useState(false);
    const toggleChecked = () => setIsChecked(!isChecked);
    const handleChecked = () => {
        onClick(id);
        toggleChecked();
    };
    return (
    <>
    {
        isChecked ?
        <TypeButton onClick={handleChecked} src={img_checked} alt="type_checked"/> : 
        <TypeButton onClick={handleChecked} src={img_unchecked} alt="type_unchecked"/>
    }
    </>
)};
const TypeButton = styled.img`    
    padding: 0.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
`;
export default QuestionTypeButton;

//onMouseOver={onClick} onMouseLeave={onClick} 