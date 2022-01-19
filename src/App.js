import { useState } from 'react';
import './App.css';
import Break from './Break';
import Session from './Session';
import Timer from './Timer'
function App() {
  const [breaktimer,setBreaktimer]=useState(5);
  const [sessiontimer,setSessiontimer]=useState(25);
  const [intervalOmeter,setIntervalOmeter]=useState(0);
  const [timer,setTimer]=useState("25:00");
  const [isStarted,setIsStarted]=useState(false);
  console.log("rerendering");
  
  const handleStart=()=>{
    if(intervalOmeter){
      clearInterval(intervalOmeter);
      setIntervalOmeter(0);
    return;
    }
    if (isStarted){
      const timerArr = timer.split(":");
      const endDate = new Date(new Date().getTime()+(parseInt(timerArr[0])*60000)+(parseInt(timerArr[1])*1000));
      const intervalID = setInterval(()=>{
        let diff =new Date(endDate.getTime()-new Date()).getTime()+50;
        let seconds = Math.floor((diff/1000)%60);
        console.log(seconds);
        let minuts = Math.floor((diff/60000)%60);
        if (seconds.toString().length<2){
          seconds="0"+seconds;
        }
        setTimer(minuts+":"+seconds);
      },1000);
      setIntervalOmeter(intervalID);
      setIsStarted(true);
    }else{
      const endDate = new Date(new Date().getTime()+sessiontimer*60000);
      const intervalID = setInterval(()=>{
        let diff =new Date(endDate.getTime()-new Date()).getTime()+50;
        let seconds = Math.floor((diff/1000)%60);
        console.log(seconds);
        let minuts = Math.floor((diff/60000)%60);
        if (seconds.toString().length<2){
          seconds="0"+seconds;
        }
        setTimer(minuts+":"+seconds);
      },1000);
      setIntervalOmeter(intervalID);
      setIsStarted(true);
    }
  }
  const handleReset=()=>{
    setBreaktimer(5);
    clearInterval(intervalOmeter);
    setSessiontimer(25);
    setIntervalOmeter(0);
    setTimer("25:00");
    setIsStarted(false);
  }
  const handleSincrement=()=>{
    if (sessiontimer>=60){
      return;
    }
    setSessiontimer((prev)=>{
      setTimer(`${prev + 1}:00`)
      return prev+1;
    });
    
  }
  
  return (
    <div className="App">
      <header className="App-header">
      25+5 Clock
      <Break btimer={breaktimer}/>
      <Session stimer={sessiontimer} handle={handleSincrement}/>
      <Timer countdown={timer}/>
      <button id="start_stop" onClick={handleStart}>start/stop</button>
      <button id="reset" onClick={handleReset}>reset</button>
      </header>
    </div>
  );
}

export default App;
