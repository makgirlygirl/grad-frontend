import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import LogoColor from '../assets/main/logo.png';
import LogoWhite from '../assets/main/logo-after.png';
import Category from "./Category";

const Header = ({main, category}) => {
    return (
      <Wrapper className={( main==true ? "green-bg" : "")}>
        <LogoWrapper>
          <Link to="/">{
              main==true ? <Logo src={LogoWhite} alt="LogoWhite"/> : <Logo src={LogoColor} alt="LogoColor"/>
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
  width: 18rem;
  padding: 2rem .5rem .5rem 2.5rem;
`;
export default Header;