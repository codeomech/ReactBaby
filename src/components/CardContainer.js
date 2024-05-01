import RestaurantCard from "./RestaurantCard";
import {
    useState
} from "react";
import { restaurants } from "../constants/mockResList";

const CardContainer = () => {
    const [listofRestaurant, setListofRestaurant] = useState(restaurants)
    return (
        <div className="body">
            <button className="filter-btn" onClick={() => {
                const filteredList = listofRestaurant.filter((res) => res.info.avgRating > 4.3)
                setListofRestaurant(filteredList);
            }}>Top Rated</button>
            <div className="cardContainer">
                {listofRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info?.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default CardContainer;