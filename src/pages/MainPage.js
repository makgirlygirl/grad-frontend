import React, { useState } from "react";
import styled from "styled-components";
import Header, { Logo } from "../components/Header";
import MainImage1 from "../assets/main/001.png";
import MainImage2 from "../assets/main/002.png";
import MainImage3 from "../assets/main/003.jpeg";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
      <Wrapper>
          <Header main={true}/>
          <MainContent1>
            <div className='main-content-text-right'>
              <h2>
                영어 공부,
                이제 SOULMATE와 함께 하세요.
              </h2><br/>
              <h1>자기주도 영어 학습 플랫폼, <br/> SOULMATE</h1>
            </div>
            <MainImg src={MainImage1}/>
            </MainContent1>
          <MainContent2>
            <MainImg src={MainImage3}/>
            <div className='main-content-text-left'>
              <h2>
              SOULMATE AI가 제작한<br/>
              1,600+개의 <br/>
              수능 기출 변형 문제 은행
              </h2><br/>
              <Link to="/bank">
                <h5 className="green-font">SOULMATE 문제 은행 바로 가기 →</h5>
            </Link>
            </div>
          </MainContent2>
          <MainContent3>
            <div className='main-content-text-right'>
              <h2>
              원하는 지문을 입력하면<br/>
              수능 유형의 문제<br/>
              자동 생성<br/>
              </h2><br/>
              <Link to="/creator">
                <h5 className="green-font">실시간 문제 제작하러 가기 →</h5>
              </Link>
            </div>
            <MainImg src={MainImage2}/>
          </MainContent3>
          <MainContent4/>
      </Wrapper>
    
    )
  }
  const Wrapper = styled.div`
    width: 100%;
    font-family: 'Gothic A1', sans-serif;
  `;
  //font-family: 'Nanum Gothic', sans-serif;
  
  const MainContent1 = styled.div`
    width: 100%;
    min-height: 70vh;
    display: flex;
    background: rgba(0, 173, 69, 0.8);
    padding: 5%;
    justify-content:center;
    color: #24303C;
  `;
  const MainContent2 = styled.div`
    width: 100%;
    min-height: 70vh;
    display: flex;
    background: white;
    padding: 5%;
    justify-content:center;
  `;
  const MainContent3 = styled.div`
    width: 100%;
    min-height: 70vh;
    display: flex;
    background: rgba(0, 173, 69, 0.2);
    font-size: 50px;
    padding: 10%;
    justify-content:center;
  `;
  const MainContent4 = styled.div`
    width: 100%;
    min-height: 70vh;
    display: flex;
    background: white;
    font-size: 50px;
    padding: 10%;
  `;
  const MainImg = styled.img`
    width: 30%;
    height: 30%;
    margin: 0 2rem 0 2rem;
  `;
  export default MainPage;