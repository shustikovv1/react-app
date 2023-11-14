import styled from "styled-components";
import {MyAnimation} from "../styles/animation/Animations";
export const StyledBtn = styled.button`
   border: none;
   background-color: cyan;
   padding: 10px 20px;
   color: sienna;
   font-size: 2rem;
   font-weight: bold;
   
   &:hover {
     background-color: crimson;
   };
   &:last-child {
     background-color: #57fff0;
   }`

export const SuperBtn = styled(StyledBtn)`
  border-radius: 5px;
  background-color: darkslateblue;
  color: black;
  &:hover {
     animation: ${MyAnimation} 2s ease-in-out infinite;
  } 
  
   `