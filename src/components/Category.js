import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Bank from "../assets/category/bank_unchecked.svg";
import Creator from "../assets/category/creator_unchecked.svg";
import Bank_checked from '../assets/category/bank_checked.svg';
import Creator_checked from "../assets/category/creator_checked.svg";
import { Logo } from "./Header";

const Category = ({label}) => {

    if(label=='bank'){
        return (
            <CategoryWrapper>
                <Link to='/bank'><Logo src={Bank_checked} alt="bank_checked"/></Link>
                <Link to='/creator'><Logo src={Creator} alt="creator_unchecked"/></Link>
            </CategoryWrapper>
        );
    } else if(label=='creator'){
        return (
            <CategoryWrapper>
                <Link to='/bank'><Logo src={Bank} alt="bank_unchecked"/></Link>
                <Link to='/creator'><Logo src={Creator_checked} alt="creator_checked"/></Link>
            </CategoryWrapper>
            );
    } else {
        return (
            <CategoryWrapper>
                <Link to='/bank'><Logo src={Bank} alt="bank_unchecked"/></Link>
                <Link to='/creator'><Logo src={Creator} alt="creator_unchecked"/></Link>
            </CategoryWrapper>
            );
    }      
    };

  const CategoryWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content : center;
    padding: 2rem;
  `;
  
  export default Category;