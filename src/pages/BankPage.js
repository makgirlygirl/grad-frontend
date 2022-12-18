import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Header from "../components/Header";
import Creator from "../assets/category/creator_unchecked.svg";
import Bank_checked from '../assets/category/bank_checked.svg';
import { Link, useNavigate } from "react-router-dom";
import Step1_Question from "../assets/bank/bank_step1.svg";
import Step2_Question from "../assets/bank/bank_step2.svg";
import Arrow from '../assets/main/arrow.svg';
import axios from "axios";
import { isElementOfType } from "react-dom/test-utils";
import QuestionTypeButton from "../components/QuestionTypeButton";

export const qTypeList = [ 
    {id:1, label:"글의 목적/주제"},
    {id:2, label:"일치/불일치"},
    {id:3, label:"순서 배열"},
    {id:4, label:"빈칸 추론"},
    {id:5, label:"어휘"},
    {id:6, label:"문장 삽입"},
    {id:7, label:"흐름과 관계 없는 문장 찾기"},
    {id:8, label:"요약문"},
];
const BankPage = () => {
    const navigate = useNavigate();
    const [qTypeNum, setQTypeNum] = useState(0);
    const [qNum, setQNum] = useState(0);
    const onChangeQNum = (e) => {
        setQNum(e.target.value);
    }
    return (
      <Wrapper>
      <Header category='bank'/>
        <div>
            <TextWrapper>Step 1. 검색할 문제의 유형을 선택하세요.</TextWrapper>
            {
                qTypeList.map((it) => (
                    <TypeWrapper>
                        <QuestionTypeButton key={it.id} {...it} onClick={() => {setQTypeNum(it.id)}} selected={qTypeNum}/>
                    </TypeWrapper>
            ))}
        </div>
        <TextWrapper><img src={Arrow}/></TextWrapper>
        <div>
        <TextWrapper><img src={Step2_Question}/></TextWrapper>
        <TypeWrapper>
            <InputLine
                key="qNum"
                value={qNum}
                onChange={onChangeQNum}
            />
            <TextWrapper>개</TextWrapper>
        </TypeWrapper>
        </div>
        <TextWrapper><img src={Arrow}/></TextWrapper>
        <QuestionWrapper>
            <Button onClick={() => {
                if(qTypeNum===0 || qNum===0)
                    console.log("incomplete input"); // 뒤로 넘기지 않고, alert 보내주기
                else {
                    console.log(qTypeNum);
                    navigate("/bank/result", { state: { qTypeValue:qTypeNum, qNumValue:qNum } });
                }
            }}>GO!</Button>
        </QuestionWrapper>
      </Wrapper>
      
    );
}

const Wrapper = styled.div`
    width: 100%;
`;
const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content : center;
  padding: 2rem;
`;
const QuestionWrapper = styled.div`
    display: flex;
    justify-content:center;
    padding: 4rem;
`
const TextWrapper = styled.div`
    display: flex;
    justify-content:center;
    padding: 2.5rem;
    font-size: 1.5rem;
    font-weight: bold;
`;
const TypeWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
`;
const InputLine = styled.input`
    resize: none;
    width: 12rem;
    height: 2rem;
    font-size: 2rem;
    font-weight: 900;
    padding: 3rem;
    border-right:0px; 
    border-top:0px; 
    border-left:0px; 
    border-bottom-width:1;
    background: transparent;
    text-align: center;
    outline: none;
    @media (max-width: 750px) {
        width: 50%;
        height: 1.5rem;
    }@media (max-width: 420px) {
        width: 80%;
    }
`; //  height: ${(props) => props.height || "10rem"};

const Button = styled.button`
    width: 36rem;
    height: 4rem;
    background: rgba(1, 129, 51, 0.78);
    border: 5px solid rgba(58, 166, 100, 0.64);
    box-shadow: 1px 1px 20px #ddd;
    border-radius: 3rem;
    font-size: 2rem;
    font-family: 'Noto Sans KR';
    font-weight: 700;
    color: white;
    &:hover{  
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
`
export default BankPage;