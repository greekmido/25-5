function Break({btimer,handleup,handledown}){
    return(
        <div id="break-label">
         <div>Break</div>
         <button className="icon-btn" id="break-increase" onClick={handleup}>+</button>
         <div id="break-length">{btimer}</div>
         <button className="icon-btn" id="break-decrease" onClick={handledown}>-</button>  
        </div>
    )
}
export default Break;