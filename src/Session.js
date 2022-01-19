function Session({stimer,handle}){
    return(
        <div id="session-label">
            session:
            <button id="session-increment" onClick={handle}>Up</button>
            <div id="session-length">{stimer}</div>
            <div id="session-decrement">Down</div>
        </div>
    )
}

export default Session;