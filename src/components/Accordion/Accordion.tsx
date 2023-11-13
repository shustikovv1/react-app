import React from "react";

type AccordPropsType = {
    title: string,
    collapsed: boolean
}

function Accordion(props: AccordPropsType) {
    if (props.collapsed === true) {
        return <div>
            <AccordionTitle title={props.title}/>
        </div>
    } else {
        return <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody />
        </div>
    }

}

function AccordionTitle(props: any) {
    return (
        <h3>{props.title}</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export  default  Accordion;