import './headerarea.css'
import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const HeaderArea = (props) => {
    const [inputValue, setInputValue] = React.useState()

    const onInput = (event) => {
        setInputValue(event.target.value)
    }

    const submitForm = (event) => {
        event.preventDefault();
        props.onSubmitYear(parseInt(inputValue))
    }

    


    return ( <div className="header-area">
        <h2><u>The</u> <u>Age</u> <u>Predictor</u></h2>
        
        
        <input
            type='number'
            onChange={onInput}
            value={inputValue}
            placeholder="XXXX"
        />
        <Link onClick={submitForm}
            activeClass="active"
            to="chart"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
            className="but"
         >
            <h1>↓</h1>
        </Link>
    </div> );
}
 
export default HeaderArea;