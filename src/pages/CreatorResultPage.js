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
        const fetchData = async(qNum) => {
            console.log(location.state.passageValue);
            setIsLoading(true);
            try {
                const response = await axios.post(`http://localhost:9000/new_passage/`, {"passage":location.state.passageValue})
                .then(response => {
                    console.log(response);
                });
                //setPassageID(response.data);
                //setQuestionList(response.data.questionList); // ?
            } catch(error) {
                console.log(error);
            }
            setIsLoading(false);
        }
        fetchData(qNum);
        //console.log(qType);
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
                        d1={it.d1} d2={it.d2} d3={it.d3} d4={it.d4} />
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