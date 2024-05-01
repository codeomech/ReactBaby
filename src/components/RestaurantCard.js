import { imagestr } from "../constants/utilis";


const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, costForTwo } = resData.info;
    const { deliveryTime } = resData.info.sla
    return (
        <div className="res-card">
            <img className="res-image" src={imagestr + cloudinaryImageId} alt="pizza"></img>
            <h3 style={{ marginBottom: "0px" }}>{name}</h3>
            <div className="res-menu">
                <h4>{cuisines.join(",")}</h4>
                <h4>{ }</h4>
                <h4>{deliveryTime + " min"}</h4>
            </div>
            <span>{costForTwo}</span>
        </div >
    )
}

export default RestaurantCard;