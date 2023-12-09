/* eslint-disable react/no-unescaped-entities */



const Location = () => {
    return (
        <div className="pb-10 px-6 md:px-10">
            <h1 className="text-4xl md:5xl font-bold text-center pb-10 "> Discover Our <span className="text-accent"> Stunning Location</span>
            </h1>
            <div className="flex flex-col lg:flex-row gap-5"> 
           
            <div className="flex-1 px-">
                <h1 className="text-center text-3xl font-bold text-accent pb-2">Nearby Attractions</h1>
                <p className="text-base font-medium"> Our hotel is just a stone's throw away from the pristine sea beach, offering you easy access to sun, surf, and sandy shores. <br /> Explore Marine Drive, Scenic Gem Just Moments Away</p>


                <h1 className="text-center text-3xl font-bold pt-5 text-accent">Points of interest</h1>
                <div className=" grid grid-cols-1  md:grid-cols-2 pt-3 gap-5">
                 <div className="flex gap-3 items-center ">
                    <img className="w-9" src="https://i.ibb.co/3N48qVS/jetski.png" alt="" />
                    <p> Experience Thrilling Skiing Adventures Near Our Hotel</p>
                </div>
                
                 <div className="flex gap-3 items-center ">
                    <img className="w-9" src="https://i.ibb.co/6FPshmb/horse.png" alt="" />
                    <p> Explore the Scenic Beauty with Horse Riding</p>
                </div>
                 <div className="flex gap-3 items-center ">
                    <img className="w-9" src="https://i.ibb.co/vXXwnST/atv.png" alt="" />
                    <p>Discover Breathtaking Scenery with Bike Riding</p>
                </div>
                 <div className="flex gap-3 items-center ">
                    <img className="w-9" src="https://i.ibb.co/P62gQzT/parasailing.png" alt="" />
                    <p>Experience the Thrill of Parasailing with Us</p>
                </div>
                 <div className="flex gap-3 items-center ">
                    <img className="w-9" src="https://i.ibb.co/tc25Gfg/lobster.png" alt="" />
                    <p>Indulge in Delectable Seafood Delights at Our local Restaurants</p>
                </div>
                 </div>
               

            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1787.0015124649774!2d91.98003995099967!3d21.416833249558902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc96118ced5b5%3A0xfeac4d792191e35e!2sCox&#39;s%20Bazar%20Sea%20Beach!5e0!3m2!1sen!2sbd!4v1699168959412!5m2!1sen!2sbd" className="w-full h-96 flex-1 px-10" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Location;