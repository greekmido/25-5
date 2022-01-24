import { useState } from 'react';
import './App.css';
import Break from './Break';
import Session from './Session';
import Timer from './Timer'
function App() {
  const [breaktimer,setBreaktimer]=useState(5);
  const [sessiontimer,setSessiontimer]=useState(25);
  const [timer,setTimer]=useState("25:00");
  const [sessionEx,setSessionEx]=useState(null);
  const [intervalOmeter,setIntervalOmeter]=useState(0);
  const [isPaused,setIsPaused]=useState(false);
  const [breakEx,setBreakEx]=useState(false);
  // const [intervalOmeter2,setIntervalOmeter2]=useState(0);
  //const [timer2,setTimer2]=useState("05:00");
  const [isStarted,setIsStarted]=useState(false);
  // // // const [sessionStarted,setSessionstarted]=useState(false);
   const [label,setLabel]=useState("Session");
  // // // const [isBstarted,setIsBstarted]=useState(false)
  // // // console.log("rerendering");
  // // if(timer==="00:55"&&intervalOmeter&&!sessionEx){
  // //   clearInterval(intervalOmeter);
  // //   //
  // //   setIntervalOmeter(0);
  // //   setSessionEx(true);
  // //   console.log("timer1 is clreard")
  // // }
  // // if(timer2==="00:55"&&intervalOmeter2&&isBstarted){
  // //   setIntervalOmeter2(0);
  // //   clearInterval(intervalOmeter2);
  // //   setIsStarted(false);
  // //   console.log("timer2 cleared");
  // // }
  // // if(sessionEx&&!isBstarted){
  // //   setLabel("Break");
  // //   const endDate = new Date(new Date().getTime()+breaktimer*60000);
  // //   const intervalID2 = setInterval(()=>{
  // //     let diff =new Date(endDate.getTime()-new Date()).getTime()+50;
  // //     let seconds = Math.floor((diff/1000)%60);
  // //     let minuts = Math.floor((diff/60000)%60);
  // //     if (seconds.toString().length<2){
  // //       seconds="0"+seconds;
  // //     }
  // //     if (minuts.toString().length<2){
  // //       minuts="0"+minuts;
  // //     }
  // //     setTimer2(minuts+":"+seconds);
  // //     console.log("break interval");  
  // //   },1000);
  // //   setIntervalOmeter2(intervalID2); 
  // //   setIsBstarted(true);
  // // }
    console.log("rendering with intervalometer= "+intervalOmeter);
    if (timer==="24:55"&&!sessionEx){
     console.log("timer is at the end");
     console.log("im clearing the interval of id no:"+intervalOmeter);
     const intervalID2 = stopGo(breaktimer);
     console.log("break interval id is "+intervalID2);
     setIntervalOmeter(intervalID2);
     clearInterval(intervalOmeter);
     setSessionEx(true);
    }

  
//  if (sessionEx===true&&!intervalOmeter){
//    console.log("session is expired and intervalometer not set");
//   const intervalID2 = stopGo(breaktimer);
//   setIntervalOmeter(intervalID2);
//   setSessionEx(false);
//  }

  function stopGo(time){
     console.log("im in");
     let timerArr;
     let endDate;
     //resume timer if it was paused
     if(isPaused){
      timerArr = timer.split(":");
      endDate = new Date(new Date().getTime()+(parseInt(timerArr[0])*60000)+(parseInt(timerArr[1])*1000));
      //start timer based on session timer
     }else{
     endDate = new Date(new Date().getTime()+time*60000);
     }
       const intervalID = setInterval(()=>{
       let diff =new Date(endDate.getTime()-new Date()).getTime()+50;
       let seconds = Math.floor((diff/1000)%60);
       let minuts = Math.floor((diff/60000)%60);
       if (seconds.toString().length<2){
         seconds="0"+seconds;
       }
       if (minuts.toString().length<2){
         minuts="0"+minuts;
       }
       setTimer(minuts+":"+seconds);
       console.log("interval id in the loop is "+intervalID);    
     },1000);
     console.log("returning wit interval id"+intervalID);
     return intervalID;
  }
  const handleStart=()=>{
    // pause if there is interval set
    if(intervalOmeter){
         clearInterval(intervalOmeter);
         setIntervalOmeter(null);
         setIsPaused(true);
         setIsStarted(false);
         return;
   }
   //start the timer
    if((!intervalOmeter&&!isStarted&&!isPaused&&!sessionEx)||isPaused){
    const intervalID = stopGo(sessiontimer);
    setIntervalOmeter(intervalID);
    setIsStarted(true); 
    }
   }//handlestart END

   const handleReset=()=>{
    setBreaktimer(5);
    clearInterval(intervalOmeter);
    setSessiontimer(25);
    setIntervalOmeter(null);
    setTimer("25:00");
    setIsStarted(false);
  }
   const handleSincrement=()=>{
    if (sessiontimer>=60||isStarted){
      return;
    }
    setSessiontimer((prev)=>{
      setTimer((prev+1).toString().length<2?"0"+(prev+1)+":00":(prev+1)+":00");
      return prev+1;
    });
    
   }
   const handleSdecrement=()=>{
    if (sessiontimer<=1||isStarted){
      return;
    }
    setSessiontimer((prev)=>{
      setTimer((prev-1).toString().length<2?"0"+(prev-1)+":00":(prev-1)+":00");
      return prev-1;
    });
   }
   const handleBincrement=()=>{
    if (breaktimer>=60||isStarted){
      return;
    }
    setBreaktimer((prev)=>{
      setTimer((prev+1).toString().length<2?"0"+(prev+1)+":00":(prev+1)+":00");
      return prev+1;
    });
   }
   const handleBdecrement=()=>{
    if (breaktimer<=1||isStarted){
      return;
    }
    setBreaktimer((prev)=>{
      setTimer((prev-1).toString().length<2?"0"+(prev-1)+":00":(prev-1)+":00");
      return prev-1;
    });
  }
  return (
    <div className="App">
      <header className="App-header">
      25+5 Clock
      <Break btimer={breaktimer} handledown={handleBdecrement} handleup={handleBincrement}/>
      <Session stimer={sessiontimer} handleup={handleSincrement} handledown={handleSdecrement}/>
      <Timer countdown={timer} label={label}/>
      <button id="start_stop" onClick={handleStart}>start/stop</button>
      <button id="reset" onClick={handleReset}>reset</button>
      </header>
    </div>
  );
}

export default App;
