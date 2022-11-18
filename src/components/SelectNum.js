import React, { useState } from "react";
import styled from "styled-components";

const SelectNum = ({num, onClick}) => {
    return (
      <CircleBtn onClick={onClick}>{num}</CircleBtn>
    ); // 
  };

const CircleBtn = styled.button`
    display: block;
    font-size: 1rem;
    width: 30px;
    height: 30px;
    border-radius: 1rem;
    line-height: 1rem;
    border: .15rem solid green;
    margin: 0 .5rem 0 .5rem;
    background: white;
    display: inline-block;
    text-align: center;
`;
export default SelectNum;