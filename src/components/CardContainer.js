import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../constants/mockResList";

const CardContainer = () => (
    <div className="cardContainer">
        {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info?.id} resData={restaurant} />
        ))}
    </div>
)

export default CardContainer;