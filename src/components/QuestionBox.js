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

// {questionID, passageID, question_type, question, new_passage, answer, d1,d2,d3,d4}
const QuestionBox = ({id, title, type, paragraph, answer, d1,d2,d3,d4}) => {
    const questionTypeList = [u1, u2, u3, u4, u5, u6, u7, u8];
    const shuffleArray = array => {
        for (let i = 0; i < array.length; i++) {
          let j = Math.floor(Math.random() * (i + 1));
          // [array[i], array[j]] = [array[j], array[i]];
          const x = array[i];
          array[i] = array[j];
          array[j] = x;
        }
        return array;
      };
    let choiceList = [answer, d1,d2,d3,d4];
    shuffleArray(choiceList);
    return (
        <Wrapper>
            <BoxWrapper>
                <UpperBox id={id} title={title} type={questionTypeList[type]}/>
                <Box>
                    <Paragraph>{paragraph}</Paragraph>
                    <ChoiceList>① {choiceList[0]}</ChoiceList><br/>
                    <ChoiceList>② {choiceList[1]}</ChoiceList><br/>
                    <ChoiceList>③ {choiceList[2]}</ChoiceList><br/>
                    <ChoiceList>④ {choiceList[3]}</ChoiceList><br/>
                    <ChoiceList>⑤ {choiceList[4]}</ChoiceList><br/>
                    
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