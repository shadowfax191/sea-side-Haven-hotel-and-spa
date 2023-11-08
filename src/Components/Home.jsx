import { Helmet } from "react-helmet-async";
import Amenties from "./Amenties";
import Banner from "./Banner";
import FeaturedRooms from "./FeaturedRooms";
import Location from "./Location";

const Home = () => {
    window.scrollTo(0,0)

    return (
        <div className="">
            <Helmet>
                <title>Sea Hotel | Home </title>
            </Helmet>
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