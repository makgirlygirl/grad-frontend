import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {u1, u2, u3, u4, u5, u6, u7, u8} from "./FileIndex";

// {passageID, question_type, question, new_passage, answer, e1,e2,e3,e4,e5}
const QuestionBox = ({id, title, paragraph, answer, e1,e2,e3,e4,e5}) => {
    const questionTypeList = [u1, u2, u3, u4, u5, u6, u7, u8];
    return (
            <BoxWrapper>
                <UpperBox>
                    <Title>#{id+1} {title}</Title>
                </UpperBox>
                <Box>
                    <Paragraph>{paragraph}</Paragraph>
                    <ChoiceList>① {e1}</ChoiceList><br/>
                    <ChoiceList>② {e2}</ChoiceList><br/>
                    <ChoiceList>③ {e3}</ChoiceList><br/>
                    <ChoiceList>④ {e4}</ChoiceList><br/>
                    <ChoiceList>⑤ {e5}</ChoiceList><br/>
                    
                </Box>
            </BoxWrapper>
    );
}
export default QuestionBox;

const BoxWrapper = styled.div`

    box-sizing: border-box;
    display: block;
    justify-content : center;
    width: 80%;
    padding: 2rem;
    @media(max-width: 1880px){
        width: 95%;
    }
`;
const Box = styled.div`
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #999999;
    padding: 1.5rem;
    display: block;
`;
const UpperBox = styled.div`
    box-sizing: border-box;
    display: block;
    width: 100%;
    padding: 1rem;
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
const QBoxInnerWrapper = styled.div`
    display: block;
    justify-content : center;
    width: 50%;

    @media(max-width: 1880px){
        width: 95%;
    }
`;