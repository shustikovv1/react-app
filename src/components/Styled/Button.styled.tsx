import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animation/Animations";

type StyledBtnPropsType = {
   color?: string
   fontSize?: string
   primary?: boolean
   outlined?: boolean
   btnType?: "type1" | "type2"
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
   border: none;
   background-color: cyan;
   padding: 10px 20px;
   color: ${props => props.color };
   font-size: 2rem;
   font-weight: bold;
   
   &:hover {
     background-color: crimson;
   };

   //outlined
   ${props => props.outlined && css<StyledBtnPropsType>`
      border: 2px solid ${props => props.color || '#57fff0'};
      color: ${props => props.color || '#57fff0'};
      background-color: transparent;

      &:hover {
         border-color: transparent;
         color: transparent;
         color: transparent;
         background-color: darkslateblue;
      };
      
   `}

   ${props => props.primary && css<StyledBtnPropsType>`
      background-color: ${props => props.color || '#57fff0'};
      color: snow;
   `}

   //primary

   //&:last-child {
   //  background-color: #57fff0;
   //}
`

export const SuperBtn = styled(StyledBtn)`
  border-radius: 5px;
  background-color: darkslateblue;
  color: ${props => props.color};
  &:hover {
     animation: ${MyAnimation} 2s ease-in-out infinite;
  } 
  
   `