function Timer({countdown,label}){
return (
    // style={{alignContent:"center",textAlign:"center"}}
    <div style={{position:"relative",textAlign:"center"}}>
        <h2 id="label">{label}</h2>
        <h1 id="timer">{countdown}</h1>
    </div>
)
}

export default Timer;
