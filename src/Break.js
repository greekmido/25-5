function Break({btimer,handleup,handledown}){
    return(
        <div id="break-label">
         Break:
         <button id="break-increase" onClick={handleup}>Up</button>
         <div id="break-length">{btimer}</div>
         <button id="break-decrease" onClick={handledown}>Down</button>  
        </div>
    )
}
export default Break;