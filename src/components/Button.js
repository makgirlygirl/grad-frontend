import React, { useState } from "react";
import styled from "styled-components";
const Button = ({label, onClick}) => {
    return (
      <CustomBtn onClick={onClick}>{label}</CustomBtn>
    ); // 
  };
  const CustomBtn = styled.button`
  
  box-sizing: border-box;
  padding: 0.8rem;
  font-size: 0.8rem;
  background-color: white;
  border: 3px solid rgba(58, 166, 100, 0.64);
  border-radius: 4px;
  `
export default Button;