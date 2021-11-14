function MoreInfo({cal, pfc, temp}){
    const {p, f, c} = pfc
    return(
        <div className="moreInfo">
            <div>{cal} Cal</div>
            <div>P/F/C: {p}/{f}/{c}</div>
            <div>{temp} C</div>
        </div> 
    )
}

export default MoreInfo