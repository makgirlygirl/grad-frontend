import React, { useState } from "react";
import styled from 'styled-components';

import { u1, u2, u3, u4, u5, u6, u7, u8 } from './FileIndex';
import { c1, c2, c3, c4, c5, c6, c7, c8 } from './FileIndex';

// 버튼 하나를 구현
const QuestionTypeButton = ({id, onClick}) => {
    
    const uncheckedButtonList = [u1, u2, u3, u4, u5, u6, u7, u8];
    const checkedButtonList = [c1, c2, c3, c4, c5, c6, c7, c8];

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
        <TypeButton onClick={handleChecked} src={checkedButtonList[id-1]} alt="type_checked"/> : 
        <TypeButton onClick={handleChecked} src={uncheckedButtonList[id-1]} alt="type_unchecked"/>
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