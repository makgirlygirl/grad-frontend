import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import LogoImg from '../assets/main/logo.png';
import Category from "./Category";

const Header = ({category}) => {
    return (
      <Wrapper>
        <LogoWrapper>
          <Link to="/">
            <Logo src={LogoImg} alt="Logo"/>
          </Link>
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
export const Logo = styled.img`
  width: 13rem;
  padding: 1rem;
`;
const CategoryWrapper = styled.div`
width: 100%;
display: flex;
justify-content : center;
padding: 2rem;
`;
const Bar = styled.div`
  width: 100%;
  height: 2rem;
  background-color: #252F3D;
  text-align: right;
  color: white;
  padding-right: 2rem; 
`;
export default Header;