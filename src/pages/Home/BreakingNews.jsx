
import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div className="bg-gray-100 flex items-center py-3 px-5">
            <button className="btn btn-secondary">Latest</button>
            <Marquee speed={100}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur suscipit ipsa ad quaerat ......</p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;