import { imagestr } from "../constants/utilis";

const FoodMenu = ({ data }) => {
    console.log(data);
    return (
        <div >
            {data.map((item) => <div key={item.card.info.id}>
                <div className="mainmenu">
                    <div className="menu">
                        <span className="itemname">{item.card?.info?.name}</span>
                        <span className="itemname">{item.card?.info?.price / 100 || item.card?.info?.defaultPrice / 100} Rs</span>
                        <p className="desc">{item.card?.info?.description}</p>
                    </div>
                    <img className="menuImg" src={imagestr + item?.card?.info?.imageId} alt="pizza"></img>
                    <div className="divider"></div>
                </div>
            </div>)}
        </div>
    )
}

export default FoodMenu;