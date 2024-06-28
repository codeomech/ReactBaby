import FoodMenu from "./FoodMenu";

const ResCategories = ({ data }) => {
    console.log(data);
    return (
        <div className="center-container">
            <div className="cardsss">
                <div className="headerRes">
                    <span>{data.title} ({data?.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                <FoodMenu data={data.itemCards} />
            </div>
        </div>
    )
}
export default ResCategories;