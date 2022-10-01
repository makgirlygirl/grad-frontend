import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Header from "../components/Header";
import Creator from "../assets/category/creator_unchecked.svg";
import Bank_checked from '../assets/category/bank_checked.svg';
import { Link, useLocation, useNavigate } from "react-router-dom";
import QuestionBox from "../components/QuestionBox";
import { ExampleQuestionList } from "../assets/bank/Example-QuestionList";
import QuestionTypeList, { bankQuestionTypeList } from "../assets/bank/QuestionTypeList";
import axios from "axios";

const BankResultPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false); //로딩중임을 표시하는 state
    const [postNum, setPostNum] = useState(10); // 'Load More' 기능 구현을 위한 state

    const [questionList, setQuestionList] = useState(ExampleQuestionList);
    const [qType, setQType] = useState(0);
    const [qNum, setQNum] = useState(0); 
    let i=0; //문제 번호

    useEffect(()=> {
        setQType(location.state.qTypeValue);
        setQNum(location.state.qNumValue);

        const fetchData = async(qType, qNum) => {
            setIsLoading(true);
            try {
                //const response = await axios.get(`http://203.255.178.158:8080/question/${qTypeNum+1}`);
                const response = ExampleQuestionList; // 통신 되면 지우는 코드
                setQuestionList(response);
                setQNum(ExampleQuestionList.length);
            } catch(error) {
                console.log(error);
            }
            setIsLoading(false);
        }
        fetchData(qType, qNum);
    }, [location]);

    const LoadMore = () => {
        setPostNum(prev => prev + 10);
    }
    return (
        <>
        <Header/>
        <CategoryWrapper>
            <Link to='/bank'><img src={Bank_checked} alt="bank_checked"/></Link>
            <Link to='/creator'><img src={Creator} alt="creator_unchecked"/></Link>
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
                <GR>{bankQuestionTypeList[qType].label}</GR> 유형의 
                문제 <GR>{qNum}</GR>개를 찾았어요!
        </Description>
            <>
            {
                questionList.slice(0,postNum).map((it) => ( 
                    // {questionID, passageID, question_type, question, new_passage, answer, d1,d2,d3,d4}
                    <QuestionBox key={it.questionID} id={i++} title={it.question} type={it.question_type} 
                     paragraph={it.new_passage} answer={it.answer} d1={it.d1} d2={it.d2} d3={it.d3} d4={it.d4} />
                    )
                )
            }
            </>
            <div className="load-more">
            {
              postNum<questionList.length ? (
                <div>
                  <p>{postNum}/{questionList.length}</p> 
                  <p>{questionList.length - postNum}개의 문제가 더 남아있어요!</p>
                  <button onClick={LoadMore}>10개 더 보기</button>
                </div>
              ):(
                <h3>{questionList.length}개의 문제를 모두 풀었어요! 수고하셨습니다. </h3>
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
export default BankResultPage;