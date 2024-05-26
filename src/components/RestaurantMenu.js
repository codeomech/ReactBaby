import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ResCategories from './ResCategories';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const { resid } = useParams()

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=" + resid
                const response = await fetch(URL);

                const json = await response.json();
                setResInfo(json.data);
            } catch (error) {
                console.error('Error fetching menu:', error);
            }
        };

        fetchMenu();
    }, []);

    if (!resInfo) {
        return <div>Loading...</div>; // Render a loading state while fetching data
    }

    const restaurantDetails = resInfo?.cards[2]?.card?.card?.info;

    if (!restaurantDetails) {
        return <div>No restaurant details available.</div>; // Handle case when data structure is unexpected
    }

    const { name, cuisines, cloudinaryImageId, costForTwoMessage, avgRating, sla } = restaurantDetails;

    const foodCategories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <div className="restaurant-details">
            <div className="details-container">
                <h3>{name}</h3>
                <h4>Cuisine: {cuisines.join(",")}</h4>
                <p>Cost for Two: {costForTwoMessage}</p>
                <p>Average Rating: {avgRating}</p>
                {sla && <p>Estimated Delivery Time: {sla.deliveryTime} mins</p>}
                <h4>MENU</h4>
                {foodCategories.map((category) => <ResCategories data={category?.card?.card} />)}
            </div>
        </div>
    );
};

export default RestaurantMenu;
