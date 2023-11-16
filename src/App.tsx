import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Ratings/AppTitle";
import styled from "styled-components";
import {StyledBtn, SuperBtn} from "./components/Styled/Button.styled";
import {Link} from "./components/Styled/Link.styled";
import {Menu} from "./components/Styled/Menu.styled";
import {myTheme} from "./components/styles/Theme.styled";

function App() {
  return (
    <div className="App">
        <Menu>
            <ul>
                <li><a href="">Menu Item 1</a></li>
                <li><a href="">Menu Item 2</a></li>
                <li><a href="">Menu Item 3</a></li>
            </ul>
        </Menu>
        <Box>
            {/*<Link href="#">Link</Link>*/}
            {/*<StyledBtn as={Link} href="#">Link</StyledBtn>*/}
            <StyledBtn color={myTheme.colors.secondary} primary>Push</StyledBtn>
            <StyledBtn color={myTheme.colors.primary} primary>Push</StyledBtn>
            <StyledBtn color="green" outlined>Push</StyledBtn>
            {/*<SuperBtn color="red">SUPER</SuperBtn>*/}
            {/*<input type="radio"/>*/}
        </Box>
        {/*<PageTitle title={"Page Title"}/>*/}
        {/*<PageTitle title={"Page Title2"}/>*/}
        {/*<Accordion title={"Menu"} collapsed={true}/>*/}
        {/*<Accordion title={"Users"} collapsed={false}/>*/}
        {/*Article 1*/}
        {/*<Rating val={4}/>*/}
        {/*Article 2*/}
        {/*<Rating val={1}/>*/}
        {/*Article 3*/}
        {/*<Rating val={0}/>*/}
        {/*Article 4*/}
        {/*<Rating val={5}/>*/}
    </div>
  );
}

const Box = styled.div`
   height: 100vh;
   display: flex;
   align-items: center;
   gap: 20px;
   justify-content: center;
   button {
     cursor: pointer;
   }
  
   ${Link} {
     cursor: zoom-in;
   }
  
  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`


// function PageTitle(props: any) {
//     return <h1>{props.title}</h1>
// }

export default App;
