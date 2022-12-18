import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Header from "../components/Header";
import Creator from "../assets/category/creator_unchecked.svg";
import Bank_checked from '../assets/category/bank_checked.svg';
import { Link, useLocation, useNavigate } from "react-router-dom";
import QuestionBox from "../components/QuestionBox";
import { ExampleQuestionList } from "../assets/bank/Example-QuestionList";
import axios from "axios";
import Button from "../components/Button";
import { qTypeList } from "./BankPage";

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
        const fetchData = async(qType, qNum) => {

            setQType(location.state.qTypeValue-1);
            setIsLoading(true);
            try {
                const response = await axios.get(`http://localhost:9000/question?type=${location.state.qTypeValue}&&num=${location.state.qNumValue}`);
                setQuestionList(response.data);
                // response.data는 DB에서 받아오는 문제의 개수 / location.state.qNumValue는 사용자가 요청한 문제 개수
                response.data.length < location.state.qNumValue ? setQNum(response.data.length) : setQNum(location.state.qNumValue);
            } catch(error) {
                console.log(error);
                setQNum(20); // 통신 오류로 문제 못 가져올 경우, 샘플 문제 보여줌
            }
            setIsLoading(false);
        }
        fetchData(qType, qNum);
        //console.log(qType);
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
                <GR>{qTypeList[qType].label}</GR> 유형의 
                문제 <GR>{qNum}</GR>개를 찾았어요!
            </Description>
            <WordFileButton href="http://localhost:9000/get_docx">
                <Button 
                    className={'word-file-btn'}
                    label="시험지로 저장하기"
                />
            </WordFileButton>
            <QBoxOuterWrapper>
                <QBoxInnerWrapper>
                {
                questionList.slice(0,postNum).map((it) => ( 
                    <QuestionBox key={it.passageID} id={i++} 
                        title={it.question} 
                        paragraph={it.new_passage} answer={it.answer} 
                        e1={it.e1} e2={it.e2} e3={it.e3} e4={it.e4} e5={it.e5} />
                        )
                    )
                }
                    <div className="load-more strong-font">
                    {
                        postNum<qNum ? (
                            <div>
                            <p>{qNum - postNum}개의 문제가 더 남아있어요!</p>
                            <Button 
                                className='word-file-btn strong-font'
                                label={qNum - postNum +"문제 더 풀기"}
                                onClick={LoadMore}
                            />
                            </div>
                        ):(
                            <h3>{qNum}개의 문제를 모두 풀었어요! 수고하셨습니다. </h3>
                        )
                        }
                    </div>
                </QBoxInnerWrapper>
            </QBoxOuterWrapper>
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
const WordFileButton = styled.a`
    width: 100%;
    display: flex;
    justify-content : right;
    padding-right: 2rem;
`;
const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content : center;
  padding: 2rem;
`;
const QBoxOuterWrapper = styled.div`
  justify-content : center;
  padding: 2rem 4rem 2rem 4rem;    
  display: flex;
`;
const QBoxInnerWrapper = styled.div`
    display: block;
    justify-content : center;
    width: 100%;

    @media(max-width: 1880px){
        width: 100%;
    }
`;
export default BankResultPage;