import React from "react";
import styled from 'styled-components';
import Header from "../components/Header";
import Bank from "../assets/category/bank_unchecked.svg";
import Creator from "../assets/category/creator_unchecked.svg";
import Bank_checked from '../assets/category/bank_checked.svg';
import Creator_checked from "../assets/category/creator_checked.svg";
import { Link } from "react-router-dom";

const CreatorPage = () => {
    return (
      <Wrapper>
        <Header/>
        <CategoryWrapper>
            <Link to='/bank'><img src={Bank} alt="bank_unchecked"/></Link>
            <Link to='/creator'><img src={Creator_checked} alt="creator_checked"/></Link>
        </CategoryWrapper>
      </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
`;
const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content : center;
  padding: 2rem;
`;
export default CreatorPage;