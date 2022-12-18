import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import LogoImg from '../assets/main/logo.png';
import MainLogoImg from '../assets/main/logo-after.png';
import Category from "./Category";

const Header = ({main, category}) => {
    return (
      <Wrapper>
        <LogoWrapper>
          <Link to="/">{
              main==true ? <Logo src={MainLogoImg} alt="MainLogo"/> : <Logo src={LogoImg} alt="Logo"/>
          }</Link>
        </LogoWrapper>
        <Category label={category}/>
      </Wrapper>
    );
  };
  
const Wrapper = styled.div`
  width: 100%;
  height: 5%;
`;
const LogoWrapper = styled.div`
  width: 100%;
  height: 10%;
  text-align: left;
  padding: 2% 0 0 4%;
`;
const Logo = styled.img`
  width: 16rem;
  padding: 2rem .5rem .5rem 2.5rem;
`;
export default Header;