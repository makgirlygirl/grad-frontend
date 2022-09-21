import React from "react";
import styled from "styled-components";
import QuestionTypeButton from "../../components/QuestionTypeButton";

export const bankQuestionTypeList = [ //초기값
    {id:0, checked: false},
    {id:1, checked: false},
    {id:2, checked: false},
    {id:3, checked: false},
    {id:4, checked: false},
    {id:5, checked: false},
    {id:6, checked: false},
    {id:7, checked: false},
];
const QuestionTypeList = ({onClick, qTypeList}) => {
    return (
        <>
        {qTypeList.map((it) => (
                <TypeWrapper>
                    <QuestionTypeButton key={it.id} {...it} onClick={onClick}/>
                </TypeWrapper>
        ))}
        </>
    );
};
export default QuestionTypeList;

const TypeWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
`;