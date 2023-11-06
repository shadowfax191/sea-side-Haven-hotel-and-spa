import Amenties from "./Amenties";
import Banner from "./Banner";
import FeaturedRooms from "./FeaturedRooms";
import Location from "./Location";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <div className="max-w-7xl mx-auto ">
            <Amenties></Amenties>
            <FeaturedRooms></FeaturedRooms>
            <Location></Location>
            </div>
        </div>
    );
};

export default Home;