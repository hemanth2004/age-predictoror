import LineChart from "./graph-components/LineChart";
import Label from "./graph-components/AxisLabel";
import './chartarea.css'
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import ChartTitle from "./graph-components/ChartTitle";

const ChartArea = (props) => {

    
    
    const [data,setData] = React.useState([
        { label: "2004", x: 0, y: 0 },
        { label: "2005", x: 1, y: 1 },
        { label: "2006", x: 2, y: 2 },
        { label: "2007", x: 3, y: 3 },
        { label: "2008", x: 4, y: 4 },
        { label: "2009", x: 5, y: 5 },
        { label: "2010", x: 6, y: 6 },
        { label: "2010", x: 7, y: 7 },
        { label: "2010", x: 8, y: 8 },
        { label: "2010", x: 9, y: 9 }
        
    ])
  
      
    const styles = {
        chartComponentsContainer: {
          display: 'grid', gridTemplateColumns: 'max-content 700px', alignItems: 'center', color: 'white'
        },
        chartWrapper: { maxWidth: 700, alignSelf: 'flex-start' }
      }

    return ( <div className="chart-area">

        <h2>Accurate Prediction using a graph</h2>
        <div className="hr" />
        
        <div className="scaler">
            <p>X axis- year in years; Y axis- Age in years</p>
            {!(props.info=="hide") && 
            <div className="mainscale">
                <button onClick={()=>{
                    props.changeScale(-1);
                    props.onChangeV();
                }}>
                    -
                </button>
                <div>
                 {props.scale}
                </div>
                <button onClick={()=>{
                    props.changeScale(1);
                    props.onChangeV();
                }}>
                    +
                </button>
            </div>}
        </div>
              
        <h3 className="warning1">{(props.info=="hide")?"enter birth year to calculate age":""}</h3>

        <div className="chart ">
        <div style={styles.chartComponentsContainer } id="chart">
      <div/>
      
      <ChartTitle text="Age graph as time increases by solar year"/>
      <Label text="Age" rotate/>
      <div style={styles.chartWrapper}>
        <LineChart
          width={700 }
          height={400}
          data={props.data}
          horizontalGuides={props.scale}
          precision={0}
          verticalGuides={props.scale}
          age={props.age}
        />
      </div>
      <div/>
      <Label text="Time"/>
      <div className={props.info} />
    </div>
    
    </div>
    <div className="hr" />
    <div className="res">
        
      <h3>Calculation   Results</h3>
      <div>With the help of high tech super advanced graph calculations, <br />the age predictor has deduced that <br /> your age is</div><br />
      <h1>{props.age}</h1>
      
    </div>

    <Link 
            activeClass="active"
            to="header-area"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
            className="butt"
         >
            <h5>Back to Top</h5>
    </Link>
    <p className="cred">Made by <a href="https://github.com/hemanth2004" target="_blank">Hemanth</a></p>
    </div> );
}
 
export default ChartArea;