import { imagestr } from "../constants/utilis";

const FoodMenu = ({ data }) => {
    console.log(data);
    return (
        <div >
            {data.map((item) => <div key={item.card.info.id}>
                <div className="mainmenu">
                    <img className="menuImg" src={imagestr + item?.card?.info?.imageId} alt="pizza"></img>
                    <div className="menu">
                        <span>{item.card?.info?.name}</span>
                        <span>{item.card?.info?.price / 100 || item.card?.info?.defaultPrice / 100} Rs</span>
                    </div>
                    <p>{item.card?.info?.description}</p>
                </div>
            </div>)}
        </div>
    )
}

export default FoodMenu;