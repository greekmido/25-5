function Break({btimer}){
    return(
        <div id="break-label">
         Break:
         <div id="break-increase">Up</div>
         <div id="break-length">{btimer}</div>
         <div id="break-decrease">Down</div>  
        </div>
    )
}
export default Break;