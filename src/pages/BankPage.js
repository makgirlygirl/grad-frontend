import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Header from "../components/Header";
import Bank from "../assets/category/bank_unchecked.svg";
import Creator from "../assets/category/creator_unchecked.svg";
import Bank_checked from '../assets/category/bank_checked.svg';
import Creator_checked from "../assets/category/creator_checked.svg";
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
    return (
      <Wrapper>
      <Header/>
        <CategoryWrapper>
            <Link to='/bank'><img src={Bank_checked} alt="bank_checked"/></Link>
            <Link to='/creator'><img src={Creator} alt="creator_unchecked"/></Link>
        </CategoryWrapper>
        <BoxWrapper>
            <TextWrapper><img src={Step1_Question}/></TextWrapper>
            <QuestionTypeList onClick={onClickType} questionTypeList={questionTypeList}/>
            <TextWrapper><img src={Arrow}/></TextWrapper>
        </BoxWrapper>
        <TypeWrapper>
            <TextWrapper><img src={Step2_Question}/></TextWrapper>
            
        </TypeWrapper>
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
const BoxWrapper = styled.div`
    padding: 2rem;
`
const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    padding: 3rem;
`;
const TypeWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
`;
export default BankPage;