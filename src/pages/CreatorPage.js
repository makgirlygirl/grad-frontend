import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Header from "../components/Header";
import Bank from "../assets/category/bank_unchecked.svg";
import Creator_checked from "../assets/category/creator_checked.svg";
import { Link, useNavigate } from "react-router-dom";
import Arrow from '../assets/main/arrow.svg';
import Step1_Question from "../assets/creator/creator_step1.svg";
import axios from "axios";

const CreatorPage = () => {
  const navigate = useNavigate();

  const [passage, setPassage] = useState("");
  const onChangePassage = (e) => {
    setPassage(e.target.value);
  }
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
            <InputBox
              key="passage"
              value={passage}
              onChange={onChangePassage}
            />
          </TypeWrapper>
        </div>
        <TextWrapper><img src={Arrow}/></TextWrapper>
        <QuestionWrapper>
            <Button onClick={() => {
                navigate("/creator/result", { state: { passageValue:passage } });
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
  border: 6px solid rgba(58, 166, 100, 0.64);
  border-radius: 4px;
`;
export default CreatorPage;