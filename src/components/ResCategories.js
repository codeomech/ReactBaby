import FoodMenu from "./FoodMenu";

const ResCategories = ({ data }) => {
    console.log(data);
    return (
        <div>
            <div className="headerRes">
                <span>{data.title} ({data?.itemCards.length})</span>
                <span>🔽</span>
            </div>
            <FoodMenu data={data.itemCards} />
        </div>
    )
}
export default ResCategories;