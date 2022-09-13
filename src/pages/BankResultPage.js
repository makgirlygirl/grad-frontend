import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Header from "../components/Header";
import Creator from "../assets/category/creator_unchecked.svg";
import Bank_checked from '../assets/category/bank_checked.svg';
import { Link, useLocation, useNavigate } from "react-router-dom";
import QuestionBox from "../components/QuestionBox";
//import { ExampleQuestionList } from "../assets/bank/Example-QuestionList";

const BankResultPage = () => {
    /*
    const location = useLocation();
    const navigate = useNavigate();
    const [typeList, setTypeList] = useState({});
    const [numOfQuestions, setNumOfQuestions] = useState(0);
    useEffect(()=> {
        setTypeList(location.state.typeListValue); //location.state
        setNumOfQuestions(location.state.questionNumValue);
    }, [location]);
    // 예시--> [글의 목적/주제 찾기] 유형, [요약문] 유형의 문제 [20]개를 찾았어요!
    */
    const [questionList, setQuestionList] = useState(ExampleQuestionList);
    
        /* GET API 동기 방식으로 받아오면 useEffect로 setQuestionList 해주는 내용 추가하기!! */

    return (
        <>
        <Header/>
        <CategoryWrapper>
            <Link to='/bank'><img src={Bank_checked} alt="bank_checked"/></Link>
            <Link to='/creator'><img src={Creator} alt="creator_unchecked"/></Link>
        </CategoryWrapper>
        <BoxWrapper>
            <Description>
                <GR>글의 목적/주제 찾기</GR> 유형, <GR>요약문</GR> 유형의 문제 <GR>20</GR>개를 찾았어요!
            </Description>
            {
                
                
                questionList.map((it) => console.log(it.id) //왜 두번씩 나오지? 
                    /*(
                        
                        <QuestionBox key={it.id} questionList={it}/>
                    
                    )        
                */
                )
            }
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
const ExampleQuestionList = [
    {id:0, title:"다음 글의 목적으로 가장 적절한 것은?", type:0, 
        paragraph: `Philip Kitcher and Wesley Salmon have suggested that there are two possible alternatives among philosophical theories of explanation.
        One is the view that scientific explanation consists in the unification of broad bodies of phenomena under a minimal number of generalizations.
        According to this view, the (or perhaps, a) goal of science is to construct an economical framework of laws or generalizations that are capable of subsuming all observable phenomena.
        Scientific explanations organize and systematize our knowledge of the empirical world; the more economical the systematization, the deeper our understanding of what is explained.
        The other view is the causal/mechanical approach. According to it, a scientific explanation of a phenomenon consists of uncovering the mechanisms that produced the phenomenon of interest.
        This view sees the explanation of individual events as primary, with the explanation of generalizations flowing from them.
        That is, the explanation of scientific generalizations comes from the causal mechanisms that produce the regularities.`,
        choiceList: {
            ans: `Philip Kitcher and Wesley Salmon proposed that there are two possible choices in the theory of philosophy.`,
            dis1: `One thing is that scientific interpretation is a wide range of control.`, 
            dis2: `According to this point of view, the scientific goal is (or A) to establish the goal of accumulated economic framework.`,
            dis3: `The scientific interpretation organization and the systematic understanding of our understanding of the world; the more economical the economy, the deeper our understanding of natural content.`,
            dis4: `In other words, the conclusion of science comes from a very small study.`,
        } // 나중에 이걸 프론트 단에서 랜덤으로 섞는다
    },
    {id:1, title:"다음 글의 목적으로 가장 적절한 것은?", type:0, 
        paragraph: `Philip Kitcher and Wesley Salmon have suggested that there are two possible alternatives among philosophical theories of explanation.
        One is the view that scientific explanation consists in the unification of broad bodies of phenomena under a minimal number of generalizations.
        According to this view, the (or perhaps, a) goal of science is to construct an economical framework of laws or generalizations that are capable of subsuming all observable phenomena.
        Scientific explanations organize and systematize our knowledge of the empirical world; the more economical the systematization, the deeper our understanding of what is explained.
        The other view is the causal/mechanical approach. According to it, a scientific explanation of a phenomenon consists of uncovering the mechanisms that produced the phenomenon of interest.
        This view sees the explanation of individual events as primary, with the explanation of generalizations flowing from them.
        That is, the explanation of scientific generalizations comes from the causal mechanisms that produce the regularities.`,
        choiceList: {
            ans: `Philip Kitcher and Wesley Salmon proposed that there are two possible choices in the theory of philosophy.`,
            dis1: `One thing is that scientific interpretation is a wide range of control.`, 
            dis2: `According to this point of view, the scientific goal is (or A) to establish the goal of accumulated economic framework.`,
            dis3: `The scientific interpretation organization and the systematic understanding of our understanding of the world; the more economical the economy, the deeper our understanding of natural content.`,
            dis4: `In other words, the conclusion of science comes from a very small study.`,
        } 
    },
    {id:2, title:"다음 글의 목적으로 가장 적절한 것은?", type:0, 
        paragraph: `Philip Kitcher and Wesley Salmon have suggested that there are two possible alternatives among philosophical theories of explanation.
        One is the view that scientific explanation consists in the unification of broad bodies of phenomena under a minimal number of generalizations.
        According to this view, the (or perhaps, a) goal of science is to construct an economical framework of laws or generalizations that are capable of subsuming all observable phenomena.
        Scientific explanations organize and systematize our knowledge of the empirical world; the more economical the systematization, the deeper our understanding of what is explained.
        The other view is the causal/mechanical approach. According to it, a scientific explanation of a phenomenon consists of uncovering the mechanisms that produced the phenomenon of interest.
        This view sees the explanation of individual events as primary, with the explanation of generalizations flowing from them.
        That is, the explanation of scientific generalizations comes from the causal mechanisms that produce the regularities.`,
        choiceList: {
            ans: `Philip Kitcher and Wesley Salmon proposed that there are two possible choices in the theory of philosophy.`,
            dis1: `One thing is that scientific interpretation is a wide range of control.`, 
            dis2: `According to this point of view, the scientific goal is (or A) to establish the goal of accumulated economic framework.`,
            dis3: `The scientific interpretation organization and the systematic understanding of our understanding of the world; the more economical the economy, the deeper our understanding of natural content.`,
            dis4: `In other words, the conclusion of science comes from a very small study.`,
        } 
    },
    {id:3, title:"다음 글의 목적으로 가장 적절한 것은?", type:0, 
        paragraph: `Philip Kitcher and Wesley Salmon have suggested that there are two possible alternatives among philosophical theories of explanation.
        One is the view that scientific explanation consists in the unification of broad bodies of phenomena under a minimal number of generalizations.
        According to this view, the (or perhaps, a) goal of science is to construct an economical framework of laws or generalizations that are capable of subsuming all observable phenomena.
        Scientific explanations organize and systematize our knowledge of the empirical world; the more economical the systematization, the deeper our understanding of what is explained.
        The other view is the causal/mechanical approach. According to it, a scientific explanation of a phenomenon consists of uncovering the mechanisms that produced the phenomenon of interest.
        This view sees the explanation of individual events as primary, with the explanation of generalizations flowing from them.
        That is, the explanation of scientific generalizations comes from the causal mechanisms that produce the regularities.`,
        choiceList: {
            ans: `Philip Kitcher and Wesley Salmon proposed that there are two possible choices in the theory of philosophy.`,
            dis1: `One thing is that scientific interpretation is a wide range of control.`, 
            dis2: `According to this point of view, the scientific goal is (or A) to establish the goal of accumulated economic framework.`,
            dis3: `The scientific interpretation organization and the systematic understanding of our understanding of the world; the more economical the economy, the deeper our understanding of natural content.`,
            dis4: `In other words, the conclusion of science comes from a very small study.`,
        } 
    },
    {id:4, title:"다음 글의 목적으로 가장 적절한 것은?", type:0, 
        paragraph: `Philip Kitcher and Wesley Salmon have suggested that there are two possible alternatives among philosophical theories of explanation.
        One is the view that scientific explanation consists in the unification of broad bodies of phenomena under a minimal number of generalizations.
        According to this view, the (or perhaps, a) goal of science is to construct an economical framework of laws or generalizations that are capable of subsuming all observable phenomena.
        Scientific explanations organize and systematize our knowledge of the empirical world; the more economical the systematization, the deeper our understanding of what is explained.
        The other view is the causal/mechanical approach. According to it, a scientific explanation of a phenomenon consists of uncovering the mechanisms that produced the phenomenon of interest.
        This view sees the explanation of individual events as primary, with the explanation of generalizations flowing from them.
        That is, the explanation of scientific generalizations comes from the causal mechanisms that produce the regularities.`,
        choiceList: {
            ans: `Philip Kitcher and Wesley Salmon proposed that there are two possible choices in the theory of philosophy.`,
            dis1: `One thing is that scientific interpretation is a wide range of control.`, 
            dis2: `According to this point of view, the scientific goal is (or A) to establish the goal of accumulated economic framework.`,
            dis3: `The scientific interpretation organization and the systematic understanding of our understanding of the world; the more economical the economy, the deeper our understanding of natural content.`,
            dis4: `In other words, the conclusion of science comes from a very small study.`,
        } 
    },
];
export default BankResultPage;