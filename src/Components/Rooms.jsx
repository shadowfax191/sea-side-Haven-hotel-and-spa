/* eslint-disable no-constant-condition */

import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";




const Rooms = () => {
    const dataLoad = useLoaderData()
    const [roomData, setRoomData] = useState([])
    const [sortOrder, SetSortOrder] = useState('default')
    const [reviewData, setReview] = useState([])
    // const {user}=useContext(AuthContext)
    useEffect(() => {
        if (sortOrder === 'default') {
            return setRoomData(dataLoad)
        }
        else {
            const newData = dataLoad.slice().sort((a, b) => {
                if (sortOrder === 'asc') {
                    return a.pricePerNight - b.pricePerNight

                }
                else {
                    return b.pricePerNight - a.pricePerNight
                }
            })
            return setRoomData(newData)
        }
    }, [sortOrder])

    useEffect(() => {
        axios.get(`http://localhost:5000/reviewData`,{withCredentials:true})
        .then(res => setReview(res.data))
    }, [])

    console.log(reviewData);

    return (
        <div className="max-w-7xl mx-auto py-10 px-5">
             <Helmet>
                <title>Sea Hotel | Rooms </title>
            </Helmet>
            <div className="flex justify-end pb-5 px-4">
                <select className=" w-56 h-10 border-solid border-accent border-2" value={sortOrder} onChange={(e) => SetSortOrder(e.target.value)} >
                    <option value="default">Default</option>
                    <option value="asc">Low to High</option>
                    <option value="dsc">High to Low</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    roomData.map(room =>
                        <div key={room.id}>
                            <Link to={`/details/${room?._id}`}><div className="card w-full glass">
                                <figure><img className="h-64 w-full" src={room.displayImage} alt="car!" /></figure>
                                <div className="p-7 space-y-3">
                                    <h2 className="card-title">{room?.category}</h2>

                                    <div className="flex  justify-end  gap-2">
                                        <img className="w-10" src="https://i.ibb.co/D1ntZ9n/tag.png" alt="" />
                                        <p className="pb-3 text-right font-bold text-lg">Price: ${room.pricePerNight}</p>
                                    </div>


                                    <div className="flex gap-2 items-center ">
                                        <img className="w-10" src="https://i.ibb.co/fdz9hQd/reviews.png" alt="" />
                                        <p className="text-lg font-bold">Total Reviews: {
                                                    reviewData.length>0 ?
                                                    <p>{ reviewData?.filter(review => review.roomId == room._id).length}</p>:
                                                    <p className="text-base">log in to see Total Reviews</p>
                                        }
                                         </p>
                                    </div>

                                </div>

                            </div></Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Rooms;