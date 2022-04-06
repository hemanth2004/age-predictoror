import './App.css';
import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";


import HeaderArea from './components/HeaderArea';
import ChartArea from './components/ChartArea';
import FooterArea from './components/FooterArea';

function App() {


  const [year, setYear] = React.useState(0)
  const [chartData, setChartData] = React.useState([])
  const [age, setAge] = React.useState(0)
  const [scale, setScale] = React.useState(5)
  
  

  function onSubmitYear(inputYear) {
    setYear(inputYear)
    onChangeValues(inputYear)
    
  }


  function onChangeValues(inputYear) {
    const iYear = inputYear==null ? year : inputYear
    const currentYear = new Date().getFullYear()

    var years = []
    years = getIntervals(iYear, currentYear, (scale-1))

    var data = []
    data = years.map((yr, i) => {
      return ({
        label: ''+yr,
        x: i,
        y: i
      })
    })
    
    setAge(currentYear-iYear)


    setChartData(data)

}



function getIntervals(startYear, endYear, length) {
  const gap = Math.floor((endYear - startYear)/length)
  return [ startYear, ...Array.from({ length }, (_,i) => startYear+(i+1)*gap), endYear]
} 


function changeScale(a) {
  setScale(prevScale => prevScale + a)
}

  return (
    <div className="App">
      <HeaderArea onSubmitYear={onSubmitYear} onChangeValues={onChangeValues}/>
      <ChartArea data={chartData} age={age} info={(chartData.length==0)?"hide":""}
        scale={scale} changeScale={changeScale} onChangeV={onChangeValues}/>
      <FooterArea />
    </div>
  );
}

export default App;
