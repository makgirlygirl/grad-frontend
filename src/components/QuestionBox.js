import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Button from "./Button";
import {u1, u2, u3, u4, u5, u6, u7, u8} from "./FileIndex";
import SelectNum from "./SelectNum";

// {passageID, question_type, question, new_passage, answer, e1,e2,e3,e4,e5}
const QuestionBox = ({id, title, paragraph, answer, e1,e2,e3,e4,e5}) => {
    const questionTypeList = [u1, u2, u3, u4, u5, u6, u7, u8];
    const [selected, setSelected] = useState(0);
    const submitAnswer = () => {
        console.log(selected);
    }
    return (
            <BoxWrapper>
                <UpperBox>
                    <Title>#{id+1} {title}</Title>
                </UpperBox>
                <Box>
                    <Paragraph>{paragraph}</Paragraph>
                    <ChoiceList>
                        <SelectNum num={1} onClick={()=>{setSelected(1)}}/>
                        <span>{e1}</span>
                    </ChoiceList>
                    <ChoiceList>
                        <SelectNum num={2} onClick={()=>{setSelected(2)}}/>
                        <span>{e2}</span>
                    </ChoiceList>
                    <ChoiceList>
                        <SelectNum num={3} onClick={()=>{setSelected(3)}}/>
                        <span>{e3}</span>
                    </ChoiceList>
                    <ChoiceList>
                        <SelectNum num={4} onClick={()=>{setSelected(4)}}/>
                        <span>{e4}</span>
                    </ChoiceList>
                    <ChoiceList>
                        <SelectNum num={5} onClick={()=>{setSelected(5)}}/>
                        <span>{e5}</span>
                    </ChoiceList>
                    <UnderBox>
                        <Button label={"제출"} onClick={() => {submitAnswer()}}/>
                    </UnderBox>
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
    margin: auto;
    padding: 2rem;
    @media(max-width: 1880px){
        width: 95%;
    }
`;
const Box = styled.div`
    box-sizing: border-box;
    border: 1px solid #999999;
    padding: 1.5rem;
    display: block;
`;
const UpperBox = styled.div`
    box-sizing: border-box;
    display: block;
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
const ChoiceList = styled.div`
    padding-top: .5rem;
    
`; //display:flex;
const UnderBox = styled.div`
    float: right;
    padding-right: 5rem;
    padding-bottom: 5rem;
    box-sizing: border-box;

`;
