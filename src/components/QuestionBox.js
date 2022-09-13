import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {u1, u2, u3, u4, u5, u6, u7, u8} from "./FileIndex";

export const UpperBox = ({id, title, type}) => {
    return (
        <UpperBoxStyle>
            <Title>#{id+1} {title}</Title>
            <Type src={type}/>
        </UpperBoxStyle>
    ); 
};
const QuestionBox = ({id, title, type, paragraph, choiceList}) => {
    const questionTypeList = [u1, u2, u3, u4, u5, u6, u7, u8];

    return (
        <Wrapper>
            <BoxWrapper>
                <UpperBox id={id} title={title} type={questionTypeList[type]}/>
                <Box>
                    <Paragraph>{paragraph}</Paragraph>
                    <ChoiceList>① {choiceList.ans}</ChoiceList><br/>
                    <ChoiceList>② {choiceList.dis1}</ChoiceList><br/>
                    <ChoiceList>③ {choiceList.dis2}</ChoiceList><br/>
                    <ChoiceList>④ {choiceList.dis3}</ChoiceList><br/>
                    <ChoiceList>⑤ {choiceList.dis4}</ChoiceList><br/>
                    
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
    display: block;
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
    padding: 1.5rem;
    display: block;
`;
const UpperBoxStyle = styled.div`
    box-sizing: border-box;
    display: block;
    width: 100%;
    min-height: 10%;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 900;
    color: black;
    background: rgba(58, 166, 100, 0.4);
    border: 2px solid rgba(1, 129, 51, 0.78);
    border-radius: 5px;
    float: left;
`;
const Title = styled.span`

`;
const Type = styled.img`
    float: right;
    width: 8rem;
`;
const Paragraph = styled.div`

    border: 1px solid #999999;  
    padding: 1rem;
`;
const ChoiceList = styled.span`
    padding: 1rem;
`;
const ChoiceListNum = styled.img`

`;
const BtnShowAnswer = styled.button`

`;