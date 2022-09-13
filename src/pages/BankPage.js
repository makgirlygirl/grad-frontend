import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Header from "../components/Header";
import Creator from "../assets/category/creator_unchecked.svg";
import Bank_checked from '../assets/category/bank_checked.svg';
import { Link } from "react-router-dom";
import Step1_Question from "../assets/bank/bank_step1.svg";
import Step2_Question from "../assets/bank/bank_step2.svg";
import Arrow from '../assets/main/arrow.svg';
import QuestionTypeList, { bankQuestionTypeList } from "../assets/bank/QuestionTypeList";

const BankPage = () => {
    const [questionTypeList, setQuestionTypeList] = useState(bankQuestionTypeList);
    const onClickType = (id) => {
        setQuestionTypeList(
            questionTypeList.map((it) =>
            it.id === id ? { ...it, checked: !it.checked } : it,
            ),
        );
        console.log(questionTypeList);
    };
    const [questionNum, setQuestionNum] = useState(0);
    const onChangeQuestionNum = (e) => {
        setQuestionNum(e.target.value);
    }
    return (
      <Wrapper>
      <Header/>
        <CategoryWrapper>
            <Link to='/bank'><img src={Bank_checked} alt="bank_checked"/></Link>
            <Link to='/creator'><img src={Creator} alt="creator_unchecked"/></Link>
        </CategoryWrapper>
        <div>
            <TextWrapper><img src={Step1_Question}/></TextWrapper>
            <QuestionTypeList onClick={onClickType} questionTypeList={questionTypeList}/>
        </div>
        <TextWrapper><img src={Arrow}/></TextWrapper>
        <div>
        <TextWrapper><img src={Step2_Question}/></TextWrapper>
        <TypeWrapper>
            <InputLine
                key="questionNum"
                value={questionNum}
                onChange={onChangeQuestionNum}
            />
            <TextWrapper>개</TextWrapper>
        </TypeWrapper>
        </div>
        <TextWrapper><img src={Arrow}/></TextWrapper>
        <QuestionWrapper>
            <Link to="/bank/result">
                <Button>GO!</Button>
            </Link>
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