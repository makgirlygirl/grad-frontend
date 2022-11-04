import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Header from "../components/Header";
import Bank from "../assets/category/bank_unchecked.svg";
import Creator from "../assets/category/creator_unchecked.svg";
import { Link, useNavigate } from "react-router-dom";
import Bank_checked from '../assets/category/bank_checked.svg';
import Creator_checked from "../assets/category/creator_checked.svg";
import QuestionTypeList, { bankQuestionTypeList } from "../assets/bank/QuestionTypeList";
import axios from "axios";
import Arrow from '../assets/main/arrow.svg';
import Step1_Question from "../assets/creator/creator_step1.svg";
import Step2_Question from "../assets/creator/creator_step2.svg";

const CreatorPage = () => {
  const navigate = useNavigate();

  const [qTypeNum, setQTypeNum] = useState(0);
  const [qTypeList, setQTypeList] = useState(bankQuestionTypeList);
  const onClickQType = (id) => {
        // 선택된 것 빼고는 모두 unchecked 되도록
        
        setQTypeList(
            qTypeList.map((it)=>
            it.id === id ? { ...it, checked: !it.checked } : it,
            ),
        );
        setQTypeNum(id);
    };
    return (
      <Wrapper>
        <Header/>
        <CategoryWrapper>
            <Link to='/bank'><img src={Bank} alt="bank_unchecked"/></Link>
            <Link to='/creator'><img src={Creator_checked} alt="creator_checked"/></Link>
        </CategoryWrapper>
        <div>
          <TextWrapper><img src={Step1_Question}/></TextWrapper>
          <TypeWrapper>
            <InputBox/>
          </TypeWrapper>
        </div>
        <TextWrapper><img src={Arrow}/></TextWrapper>
        <div>
            <TextWrapper><img src={Step2_Question}/></TextWrapper>
            <QuestionTypeList key="qTypeList" onClick={onClickQType} qTypeList={qTypeList}/>
        </div>
        <TextWrapper><img src={Arrow}/></TextWrapper>
        <QuestionWrapper>
            <Button onClick={() => {
                if(qTypeList===bankQuestionTypeList)
                    console.log("incomplete input"); // 뒤로 넘기지 않고, alert 보내주기
                else {
                  navigate("/creator/result", { state: { qTypeValue:qTypeNum } });
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
`;
const TypeWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
`;
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
`;
const InputBox = styled.textarea`
  
  box-sizing: border-box;
  width: 40%;
  min-height: 450px;
  padding: 1rem;
  resize: none;
  font-size: 1rem;
  background: rgba(1, 129, 51, 0.13);
  border: 8px solid rgba(58, 166, 100, 0.64);
  border-radius: 4px;
`;
export default CreatorPage;