import Header from "./Header"
import Description from "./Description"
import MoreInfo from "./MoreInfo"
import Price from "./Price"

function InfoContainer(){
    return(
        <div className = "infoContainer">
            <Header title="Pepporoni Pizza" icons = {["https://img.icons8.com/doodle/2x/blueberry.png", "https://img.icons8.com/doodle/2x/strawberry-2.png"]} />
            <Description desc = "Premium pepporoni and cheese is made with real mozzerala on original hand-tossed crust." />
            <MoreInfo cal = "265"  pfc = { {p: 12, f: 10, c: 31} } temp = "53.8" />
            <Price newPrice = "$23.90" oldPrice = "$29.90"/>
        </div>
    )
}

export default InfoContainer