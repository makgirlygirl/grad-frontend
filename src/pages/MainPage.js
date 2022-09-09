import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ExamplePhoto from "../assets/main/example-photo.png";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
      <Wrapper>
          <Header/>
          <MainContent1>
            <div className='main-content-text-right'>
              <h1>
                영어 공부,<br/>
                이제는 FIGMA와 함께 하세요.
              </h1><br/>
              <h3>자기주도 영어 학습 플랫폼, FIGMA</h3>
            </div>
            <img src={ExamplePhoto}/>
            </MainContent1>
          <MainContent2>
            <img src={ExamplePhoto}/>
            <div className='main-content-text-left'>
              <h2>
              FIGMA AI가 제작한<br/>
              1,600+개의 <br/>
              수능 기출 변형 문제 은행
              </h2><br/>
              <Link to="/bank">
                <h6>FIGMA 문제 은행 바로 가기 →</h6>
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
                <h6>실시간 문제 제작하러 가기 →</h6>
              </Link>
            </div>
            <img src={ExamplePhoto}/>
          </MainContent3>
          <MainContent4/>
      </Wrapper>
    
    )
  }
  const Wrapper = styled.div`
    width: 100%;
  `;
  const MainContent1 = styled.div`
    width: 100%;
    min-height: 70vh;
    display: flex;
    background: rgba(0, 173, 69, 0.8);
    padding: 5%;
    justify-content:center;
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
  export default MainPage