import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Header from "../components/Header";
import Creator from "../assets/category/creator_unchecked.svg";
import Bank_checked from '../assets/category/bank_checked.svg';
import { Link, useLocation, useNavigate } from "react-router-dom";
import QuestionBox from "../components/QuestionBox";
import { ExampleQuestionList } from "../assets/bank/Example-QuestionList";
import QuestionTypeList, { bankQuestionTypeList } from "../assets/bank/QuestionTypeList";

const BankResultPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [questionList, setQuestionList] = useState(ExampleQuestionList);

    const [qType, setQType] = useState(0);
    const [qNum, setQNum] = useState(0);

    useEffect(()=> {
        setQType(location.state.qTypeValue);
        setQNum(location.state.qNumValue);
        
        /* GET API 동기 방식으로 받아오면 useEffect로 setQuestionList 해주는 내용 추가하기 */

    }, [location]);

    return (
        <>
        <Header/>
        <CategoryWrapper>
            <Link to='/bank'><img src={Bank_checked} alt="bank_checked"/></Link>
            <Link to='/creator'><img src={Creator} alt="creator_unchecked"/></Link>
        </CategoryWrapper>
        <BoxWrapper>
            <Description>
                <GR>{bankQuestionTypeList[qType].label}</GR> 유형의 
                문제 <GR>{qNum}</GR>개를 찾았어요!
            </Description>
            <>
            {
                questionList.map((it) => ( //{id, title, type, paragraph, choiceList}
                    <QuestionBox key={it.id} id={it.id} title={it.title} type={it.type} paragraph={it.paragraph} choiceList={it.choiceList}/>
                    )
                )
            }
            </>
        </BoxWrapper>
        
        </>
      // {id, title, type, paragraph, choiceList}
    );
};

const BoxWrapper = styled.div`
    width: 100%;
    padding: 2rem 8rem 2rem 8rem;

    @media(max-width: 1880px){
        padding: 2rem 2rem 2rem 2rem;
    }
`;
const Description = styled.span`
    font-size: 1.5rem;
    font-weight: 700;
`;
const GR = styled.span`
    color: green;
`;
const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content : center;
  padding: 2rem;
`;
export default BankResultPage;
