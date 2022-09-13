import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export const UpperBox = ({id, title, type}) => {
    return (
        <UpperBoxStyle>
            <Title>#{id+1} {title}</Title>
            <Type>{type}</Type>
        </UpperBoxStyle>
    ); //<UpperBox id={id} title={title} type={type}/>
};
const QuestionBox = (questionList) => {
// {id, title, type, paragraph, choiceList}
// questionList.paragraph
// questionList.choiceList
    return (
        <Wrapper>
            <BoxWrapper>
                <UpperBox id={questionList.id} title={questionList.title} type={questionList.type}/>
                <Box>
                    
                </Box>
            </BoxWrapper>
        </Wrapper>
    );
}
export default QuestionBox;

const Wrapper = styled.div`
  justify-content : center;
  padding: 4rem;    
  padding-bottom: 1rem;
  display: flex;
`;
const BoxWrapper = styled.div`
    display: blocked;
    justify-content : center;
    width: 80%;
    
    @media(max-width: 1880px){
        width: 95%;
    }
`;
const Box = styled.div`
    box-sizing: border-box;
    width: 100%;
    min-height: 446px;
    border: 1px solid #999999;
`;
const UpperBoxStyle = styled.div`
    box-sizing: border-box;
    width: 100%;
    min-height: 10%;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 900;
    color: black;
    background: rgba(58, 166, 100, 0.4);
    border: 2px solid rgba(1, 129, 51, 0.78);
    border-radius: 5px;
    
`;
const Title = styled.span`
    font-family: 'Noto Sans KR';

`;
const Type = styled.img`
    /* 오른쪽 정렬 */
    text-align: right;
`;
const Paragraph = styled.div`

`;
const ChoiceList = styled.span`

`;
const ChoiceListNum = styled.img`

`;
const BtnShowAnswer = styled.button`

`;