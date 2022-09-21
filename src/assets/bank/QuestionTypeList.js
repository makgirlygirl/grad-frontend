import React from "react";
import styled from "styled-components";
import QuestionTypeButton from "../../components/QuestionTypeButton";

export const bankQuestionTypeList = [ //초기값
    {id:0, checked: false, label:"글의 목적/주제"},
    {id:1, checked: false, label:"어휘"},
    {id:2, checked: false, label:"일치/불일치"},
    {id:3, checked: false, label:"빈칸 추론"},
    {id:4, checked: false, label:"순서 배열"},
    {id:5, checked: false, label:"문장 삽입"},
    {id:6, checked: false, label:"흐름과 관계 없는 문장 찾기"},
    {id:7, checked: false, label:"요약문"},
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