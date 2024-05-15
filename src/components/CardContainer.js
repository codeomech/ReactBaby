import { Link } from 'react-router-dom';
import RestaurantCard from "./RestaurantCard";
import {
    useEffect,
    useState
} from "react";
import ShimmerComponent from "./Shimmer";
import useOnlineStatus from '../constants/useOnlineStatus';


const CardContainer = () => {
    const [listofRestaurant, setListofRestaurant] = useState([])
    const [originalRestaurantList, setOriginalRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        fetchRestData();
    }, [])
    // https://proxy.cors.sh/

    const fetchRestData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6342535&lng=73.81139550000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();
        const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants ?? [];
        setListofRestaurant(restaurants);
        setOriginalRestaurantList(restaurants);
    }

    const handleTopRatedFilter = () => {
        const filteredList = originalRestaurantList.filter((res) => res.info.avgRating > 4.3);
        setListofRestaurant(filteredList);
    };
    const handleClearFilter = () => {
        setListofRestaurant(originalRestaurantList);
        setSearchText('');
    };

    useEffect(() => {
        const filteredList = originalRestaurantList.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setListofRestaurant(filteredList);
    }, [searchText, originalRestaurantList]);

    if (onlineStatus == false) return <h1>YOU'RE OFFLINE BABY</h1>

    return listofRestaurant.length === 0 ? <ShimmerComponent /> : (
        <div className="body">
            <input
                type="text"
                className="search-box"
                value={searchText}
                onChange={(e) => { setSearchText(e.target.value) }}
                placeholder="Search By name...">
            </input>
            <button className="filter-btn" onClick={handleClearFilter}>X</button>
            <button className="filter-btn" onClick={handleTopRatedFilter}>Top Rated</button>
            <div className="cardContainer">
                {listofRestaurant.map((restaurant) => (
                    <Link key={restaurant.info?.id} to={"/restaurants/" + restaurant.info?.id}><RestaurantCard className="res-card" resData={restaurant} /></Link>
                ))}
            </div>
        </div>
    )
}

export default CardContainer;