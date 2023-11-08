
const Amenties = () => {
    return (
        <div className="py-10">
          
           <div className="flex flex-col lg:flex-row">
           <div
                className=" h-96 max-w-3xl overflow-y-scroll bg-contain bg-fixed bg-no-repeat shadow-lg con"
               style={{backgroundImage: 'url(https://i.ibb.co/g6bzNjb/140127103345-peninsula-shanghai-deluxe-mock-up.jpg)'}}>
                <div className="mt-40">
                    <div className="bg-white p-4 sm:p-8">
                        <div
                            className="font-inter text-2xl font-extrabold tracking-tight">
                           Experience the Ultimate Luxury at Our Hotel
                        </div>
                        <div className="mt-1 text-sm font-medium text-slate-500">
                        Where Every Stay is a Journey of Delight
                        </div>
                       <div>
                        <img src="https://i.ibb.co/vcspj5t/Panorama-Ocean-Sutie-hm01.jpg" alt="" />
                        <img src="https://i.ibb.co/HBm6ztm/banner.jpg" alt="" />
                        <img src="https://i.ibb.co/tqR2ZFT/12-0-room-1577697519.jpg" alt="" />
                       <div className="max-w-3xl">
                       <iframe className="w-full h-80" src="https://www.youtube.com/embed/B73TSlbOEVY?si=_3D1e68rYdJ8s8Gr&amp;start=5" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                       </div>
                       </div>

                    </div>
                </div>
            </div>
            <div className="">
            <h1 className="text-5xl font-bold text-center border-solid border-b-2 border-accent-focus py-3 mx-20">Amenities</h1>
            <div className="grid grid-cols-2 justify-center  p-6 gap-10">
                    <div >
                       <div className="flex  items-center gap-3">
                       <img className="w-8 md:w-12" src="https://i.ibb.co/Zh1JXN5/vacations.png" alt="" />
                        <p className="text-2xl text-accent ">Your beach</p>
                       </div>
                        <p className="pt-3">Discover Paradise on Your Private Beach Getaway</p>
                    </div>
                    <div >
                    <div className="flex  items-center gap-3">
                       <img className="w-8 md:w-12" src="https://i.ibb.co/CsYZHNt/living-room.png" alt="" />
                        <p className="text-2xl text-accent ">Room</p>
                       </div>
                        <p className="pt-3">Sleep Like Royalty on Our King-Size Beds</p>
                    </div>
                    <div >
                    <div className="flex  items-center gap-3">
                       <img className="w-8 md:w-12" src="https://i.ibb.co/M1tXbc9/parking.png" alt="" />
                       <p className="text-2xl text-accent ">Parking</p>
                       </div>
                        <p className="pt-3">Resort entrance Car parking facilities</p>
                    </div>
                    <div >
                    <div className="flex  items-center gap-3">
                       <img className="w-8 md:w-12" src="https://i.ibb.co/TrfcvNv/guard.png" alt="" />
                       <p className="text-2xl text-accent ">Security</p>
                       </div>
                        <p className="pt-3">Safety First: 24/7 Security & CCTV Surveillance</p>
                    </div>
            </div>
            </div>
           
            
           </div>
           
        </div>
    );
};

export default Amenties;