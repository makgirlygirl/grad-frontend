import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Header from "../components/Header";
import Creator from "../assets/category/creator_unchecked.svg";
import Bank_checked from '../assets/category/bank_checked.svg';
import { Link } from "react-router-dom";

const BankResultPage = () => {
    return (
        <>
        <Header/>
        <CategoryWrapper>
            <Link to='/bank'><img src={Bank_checked} alt="bank_checked"/></Link>
            <Link to='/creator'><img src={Creator} alt="creator_unchecked"/></Link>
        </CategoryWrapper>
        </>
      
    );
}
export default BankResultPage;

const Wrapper = styled.div`
    width: 100%;
`;
const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content : center;
  padding: 2rem;
`;