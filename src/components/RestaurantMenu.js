import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const { resid } = useParams()
    console.log(resid);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=" + resid
                console.log(URL);
                const response = await fetch(URL);

                const json = await response.json();
                setResInfo(json.data);
                console.log(json.data);
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

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[3]?.card?.card?.categories;

    let itemCards = [];

    if (categories && categories.length > 0) {
        const { itemCards: categoryItemCards } = categories[0];
        if (categoryItemCards) {
            itemCards = categoryItemCards;
        }
    } else {
        const { itemCards: fallbackItemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[3]?.card?.card || {};
        if (fallbackItemCards) {
            itemCards = fallbackItemCards;
        }
    }


    return (
        <div className="restaurant-details">
            <div className="details-container">
                <h3>{name}</h3>
                <h4>Cuisine: {cuisines.join(",")}</h4>
                <p>Cost for Two: {costForTwoMessage}</p>
                <p>Average Rating: {avgRating}</p>
                {sla && <p>Estimated Delivery Time: {sla.deliveryTime} mins</p>}
                <h4>MENU</h4>
                <ul>
                    {itemCards.map((item) => (
                        <li key={item.card.info.id}>{item.card.info.name}- {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>
                    ))}
                </ul>
            </div>
            <div className="image-container">
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt={name} />
            </div>
        </div>
    );
};

export default RestaurantMenu;
