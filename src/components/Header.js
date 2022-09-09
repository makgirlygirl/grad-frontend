import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Logo from '../assets/main/logo.jpg';
import Bank from "../assets/category/bank_unchecked.svg";
import Creator from "../assets/category/creator_unchecked.svg";
import Bank_checked from '../assets/category/bank_checked.svg';
import Creator_checked from "../assets/category/creator_checked.svg";

const Header = () => {
  
    /*
    const [bankStatus, setBankStatus] = useState(false);
    const [creatorStatus, setCreatorStatus] = useState(false);
    if (pageStatus === 'B'){ // Bank
      setBankStatus(true);
      setCreatorStatus(false);
    } else if (pageStatus === 'C') { // Creator
      setBankStatus(false);
      setCreatorStatus(true);
    } else { // A (Main page)
      setBankStatus(false);
      setCreatorStatus(false);
    }
    //
    const onClickBankStatus = () => {
      setBankStatus(true);
      setCreatorStatus(false);
      }
    const onClickCreatorStatus = () => {      
      setBankStatus(false);
      setCreatorStatus(true);
    }
    const onClickMainLogo = () => {
      setBankStatus(false);
      setCreatorStatus(false);
    }
    */
    return (
      <Wrapper>
        <Bar>
        icon icon icon
        </Bar>
        <LogoWrapper>
          <Link to="/">
            <img src={Logo} alt="Logo"/>
          </Link>
        </LogoWrapper>
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
const Bar = styled.div`
  width: 100%;
  height: 2rem;
  background-color: #252F3D;
  text-align: right;
  color: white;
  padding-right: 2rem; 
`;
export default Header;