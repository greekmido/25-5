function Session({stimer,handleup,handledown}){
    return(
        <div id="session-label">
            session:
            <button id="session-increment" onClick={handleup}>Up</button>
            <div id="session-length">{stimer}</div>
            <button id="session-decrement" onClick={handledown}>Down</button>
        </div>
    )
}

export default Session;