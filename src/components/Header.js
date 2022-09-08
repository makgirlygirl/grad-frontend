import React from "react";
import styled from 'styled-components';
import Logo from '../assets/logo.jpg';

const Header = () => {
    return (
      <Wrapper>
        <Bar>
        icon icon icon
        </Bar>
        <LogoWrapper>
          <img src={Logo} alt="Logo"/>
        </LogoWrapper>
        <CategoryWrapper>
            menu[1]
            menu[2]
        </CategoryWrapper>
      </Wrapper>
    );
  };
  
const Wrapper = styled.div`
  width: 100%;
  height: 10%;
`;
const LogoWrapper = styled.div`
  width: 100%;
  height: 10%;
  text-align: left;
  padding: 2% 0 0 4%;
`;
const Bar = styled.div`
  width: 100%;
  height: 2rem;
  background-color: #252F3D;
  text-align: right;
  color: white;
  padding-right: 2rem; 
`;
const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content : center;
  padding: 2rem;
`;
const Category = styled.img`
  padding-left: 2%;
  padding-right: 2%;
`;

export default Header;