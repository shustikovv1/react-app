import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Ratings/AppTitle";

function App() {
  return (
    <div>
        <PageTitle title={"Page Title"}/>
        {/*<PageTitle title={"Page Title2"}/>*/}
        <Accordion title={"Menu"} collapsed={true}/>
        <Accordion title={"Users"} collapsed={false}/>
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

function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}

export default App;
