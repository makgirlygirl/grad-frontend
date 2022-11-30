import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Header from "../components/Header";
import Creator_checked from "../assets/category/creator_checked.svg";
import Bank from '../assets/category/bank_unchecked.svg';
import { Link, useLocation, useNavigate } from "react-router-dom";
import QuestionBox from "../components/QuestionBox";
import { ExampleQuestionList } from "../assets/bank/Example-QuestionList";
import axios from "axios";

const CreatorResultPage = () => {
    const location = useLocation();

    const [isLoading, setIsLoading] = useState(false); //로딩중임을 표시하는 state
    const [postNum, setPostNum] = useState(10); // 'Load More' 기능 구현을 위한 state
    const [passageID, setPassageID] = useState(0); 
    const [questionList, setQuestionList] = useState(ExampleQuestionList);
    const [qNum, setQNum] = useState(0);
    let i=0; //문제 번호

    useEffect(()=> {
        console.log(location.state.responseValue.new_passage);
        setPassageID(location.state.responseValue.passageID);
        setIsLoading(true);
        try {
            setQuestionList(location.state.responseValue);
        } catch(error) {
            console.log(error);
            setQuestionList(ExampleQuestionList);
        }
        setIsLoading(false);
    }, [location]);

    const LoadMore = () => {
        setPostNum(prev => prev + 10);
    }
    return (
        <>
        <Header/>
        <CategoryWrapper>
            <Link to='/bank'><img src={Bank} alt="bank_unchecked"/></Link>
            <Link to='/creator'><img src={Creator_checked} alt="creator_checked"/></Link>
        </CategoryWrapper>
        
        <BoxWrapper>
        {
        isLoading? (
            <div className="loader">
                <span>Loading...</span>
            </div>
        ) : (
        <>
            <Description>
                새로운 지문으로부터 
                문제 <GR>{qNum}</GR>개를 생성했어요!
            </Description>
            <>
            {
                questionList.slice(0,qNum).slice(0,postNum).map((it) => ( 
                    // {questionID, passageID, question_type, question, new_passage, answer, d1,d2,d3,d4}
                    <QuestionBox key={it.questionID} id={i++} 
                        title={it.question} type={it.question_type} 
                        paragraph={it.new_passage} answer={it.answer} 
                        e1={it.e1} e2={it.e2} e3={it.e3} e4={it.e4} e5={it.e5}/>
                    )
                )
            }
            </>
            <div className="load-more">
            {
              postNum<qNum ? (
                <div>
                  <p>{postNum}/{qNum}</p> 
                  <p>{qNum - postNum}개의 문제가 더 남아있어요!</p>
                  <button onClick={LoadMore}>더 보기</button>
                </div>
              ):(
                <h3>{qNum}개의 문제를 모두 풀었어요! 수고하셨습니다. </h3>
              )
            }
          </div>
            </>
        )
        }
        </BoxWrapper>
        </>
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
export default CreatorResultPage;