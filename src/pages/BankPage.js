import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Header from "../components/Header";
import Creator from "../assets/category/creator_unchecked.svg";
import Bank_checked from '../assets/category/bank_checked.svg';
import { Link, useNavigate } from "react-router-dom";
import Step1_Question from "../assets/bank/bank_step1.svg";
import Step2_Question from "../assets/bank/bank_step2.svg";
import Arrow from '../assets/main/arrow.svg';
import QuestionTypeList, { bankQuestionTypeList } from "../assets/bank/QuestionTypeList";
import axios from "axios";
import { isElementOfType } from "react-dom/test-utils";

const BankPage = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false); //로딩중임을 표시하는 state
    const [postNum, setPostNum] = useState(10); // 'Load More' 기능 구현을 위한 state

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
    const [qNum, setQNum] = useState(0);
    const onChangeQNum = (e) => {
        setQNum(e.target.value);
    }
    const submitInput = async function(qTypeList, qNum) {
        if(qTypeList===bankQuestionTypeList || qNum===0){
            console.log("incomplete input");
            // 뒤로 넘기지 않고, alert 보내주기
        } else {
            /*
            setIsLoading(true);
            /// 여기에 GET 해오는 내용 추가
            axios.get(`http://203.255.178.158:8080/question/${qTypeNum+1}`)
            .then(function(response){
                console.log(response);
                navigate("/bank/result", { state: { qTypeValue:qTypeNum, qNumValue:qNum, resultValue: response } });
            }).catch(function(error){
                console.log(error);
            })
            */
            navigate("/bank/result", { state: { qTypeValue:qTypeNum, qNumValue:qNum } });
        }

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
            <QuestionTypeList key="qTypeList" onClick={onClickQType} qTypeList={qTypeList}/>
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
                  submitInput(qTypeList, qNum);
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