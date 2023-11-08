import { Link } from "react-router-dom";


const FeaturedRooms = () => {
    return (
        <div className="border-b-2 border-accent-focus mb-5">
            <h1 className="text-5xl font-bold text-center py-5 ">Featured <span className="text-accent">Rooms</span></h1>
            <p className="text-center">Explore Our Premium Beach villa Suites Collection</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5">
                <img className="h-80 w-full rounded-lg" src="https://i.ibb.co/HBm6ztm/banner.jpg" alt="" />
                <img className="h-80 w-full rounded-lg" src="https://i.ibb.co/kMSxX3N/Panorama-Ocean-Sutie.jpg" alt="" />
                <img className="h-80 w-full rounded-lg" src="https://i.ibb.co/16L9Qkp/Infinity-Suite-hm03.jpg" alt="" />
                <img className="h-80 w-full rounded-lg" src="https://i.ibb.co/5GdhfsT/sayeman-beach-resort.jpg" alt="" />
            </div>
            <div className="mx-auto flex justify-center pb-10">
              <Link to={`/details/6547c4733cad4caf85179d6c`}> <button className="btn btn-accent ">Book Now</button></Link>
            </div>
            
        </div>
    );
};

export default FeaturedRooms;