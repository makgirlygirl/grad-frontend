import React, { useState } from "react";
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
import { u1, u2, u3, u4, u5, u6, u7, u8 } from '../components/FileIndex';
import { c1, c2, c3, c4, c5, c6, c7, c8 } from '../components/FileIndex';
import QuestionType from "../components/QuestionType";


const BankPage = () => {
    const [type1, setType1] = useState(false);
    const OnClickType1 = () => {
        setType1(!type1);
    };
    const [type2, setType2] = useState(false);
    const OnClickType2 = () => {
        setType2(!type2);
    };
    /*
    const [stackList, setStackList] = useState(developerStackList);
    const _onToggleStack = (id) => {
        setStackList(
        stackList.map((stack) =>
            stack.id === id ? { ...stack, checked: !stack.checked } : stack,
        ),
        );
    };
    */
    return (
      <Wrapper>
      <Header/>
        <CategoryWrapper>
            <Link to='/bank'><img src={Bank_checked} alt="bank_checked"/></Link>
            <Link to='/creator'><img src={Creator} alt="creator_unchecked"/></Link>
        </CategoryWrapper>
        <BoxWrapper>
            <TextWrapper><img src={Step1_Question}/></TextWrapper>
            <TypeWrapper>
                <QuestionType checked={type1} onClick={OnClickType1} img_checked={c1} img_unchecked={u1}/> 
                <QuestionType checked={type2} onClick={OnClickType2} img_checked={c2} img_unchecked={u2}/> 
            </TypeWrapper>
            <TypeWrapper>
                <Type src={u3}/>
                <Type src={u4}/>
            </TypeWrapper>
            <TypeWrapper>
                <Type src={u5}/>
                <Type src={u6}/>
            </TypeWrapper>
            <TypeWrapper>
                <Type src={u7}/>
                <Type src={u8}/>
            </TypeWrapper>
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
const Type = styled.img`    
    padding: 0.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
`;
const Question = styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 1000;
    font-size: 25px;
`; // <Question>Step 1. 검색할 문제의 유형을 선택하세요.</Question><br/>
export default BankPage;