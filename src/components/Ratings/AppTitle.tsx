import React from "react";
import App from "../../App";
import {isBoolean} from "util";
type PropsTypeNum = {
    val: number
}

type StarPropsType = {
    selected: boolean
}
export function Rating(props: PropsTypeNum) {
    if (props.val === 1) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }

    if (props.val === 2) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }

    if (props.val === 3) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }

    if (props.val === 4) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>
        );
    }

    if (props.val === 5) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        );
    }

    return (
        <div>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    );
}

function Star(props: StarPropsType) {
        if (props.selected === true) {
            return  <span><b>Star </b></span>
        } else
        {
           return <span>Star </span>
        }
}
function AppTitle() {
    return (
        <div>This is App Component</div>
    );
}

// export default Rating;