import RestaurantCard from "./RestaurantCard";
import {
    useEffect,
    useState
} from "react";
import ShimmerComponent from "./Shimmer";

const CardContainer = () => {
    const [listofRestaurant, setListofRestaurant] = useState([])

    useEffect(() => {
        console.log("using use effect rendered last");
        fetchRestData();
    }, [])

    const fetchRestData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6342535&lng=73.81139550000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();
        setListofRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        )
    }


    return listofRestaurant.length === 0 ? <ShimmerComponent /> : (
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