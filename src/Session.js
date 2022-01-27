function Session({stimer,handleup,handledown}){
    return(
        <div id="session-label">
            <div>session</div>
            <button className="icon-btn" id="session-increment" onClick={handleup}>+</button>
            <div id="session-length">{stimer}</div>
            <button className="icon-btn" id="session-decrement" onClick={handledown}>-</button>
        </div>
    )
}

export default Session;