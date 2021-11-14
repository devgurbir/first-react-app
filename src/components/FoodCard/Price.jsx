import Orderbutton from "./Orderbutton"

function Price({newPrice, oldPrice}){
    return (
        <div className="price">
            <div className="priceInfo">
                <span>{newPrice}</span>
                <span>{oldPrice}</span>
            </div>
            <Orderbutton />
        </div>
    )
}

export default Price