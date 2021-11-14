function StylishButton({title, bgColor, color}){
    return (
        <div>
        <button style={{backgroundColor: bgColor, padding: "5px 15px", color: color, borderRadius : "8px"} }>
            {title}
            </button>
            </div>
    )
}

export default StylishButton