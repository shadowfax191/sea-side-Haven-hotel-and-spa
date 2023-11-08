import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import moment from "moment/moment";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion"


const Details = () => {
    const detail = useLoaderData()
    const { user } = useContext(AuthContext)
    const images = detail.roomImages
    const [bookingData, setBooking] = useState({})
  
    const [date, setDate] = useState(moment().format().split('T')[0])
    const [bookedData, setBooked] = useState([])
    const [acc, setAcc] = useState(false)
    const [reviewData, setReview] = useState([])




    const confirm = bookedData.some(book => book.date == date && book.roomId == detail._id)

    useEffect(() => {
        axios.get(`http://localhost:5000/bookingData`,{withCredentials:true})
        .then(res => setBooked(res.data))
    }, [])

    useEffect(() => {
            axios.get(`http://localhost:5000/reviewData`,{withCredentials:true})
            .then(res => setReview(res.data))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = user.email
        const phone = e.target.number.value
        const date = e.target.date.value
        const payment = e.target.payment.value
        const price = detail.pricePerNight
        const userId = user.uid
        const roomId = detail._id
        const photo = detail?.displayImage
        const room = detail?.category
        const info = { name, email, phone, date, payment, price, userId, roomId, photo, room }
        setBooking(info)


        const modal = document.getElementById('my_modal_4')
        if (modal) {
            modal.showModal()
        }
    }

    const handleBooking = () => {
        axios.post('http://localhost:5000/bookingData', bookingData)

            .then(res => {
                if (res.data.acknowledged) {
                    setAcc(true);
                    toast.success('Successfully Booking Complete ',
                        {
                            style: {
                                borderRadius: '10px',
                                background: '#FF0000',
                                color: '#fff',
                            },
                        })

                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleReview = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const rating = e.target.rating.value
        const comment = e.target.comment.value
        const time = e.target.date.value
        const roomId = detail._id
        const userId = user.uid
        const review = { name, rating, comment, time, roomId, userId }

        axios.post('http://localhost:5000/reviewData', review)
            .then(res => {
                if (res.data.acknowledged) {
                    toast.success('Review Complete',
                        {
                            style: {
                                borderRadius: '10px',
                                background: '#FF0000',
                                color: '#fff',
                            },
                        })

                    setTimeout(() => {
                        window.location.reload()
                    }, 1000);

                }
            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <div>
            <Helmet>
                <title>Sea Hotel | Room Details </title>
            </Helmet>
            {/* banner */}

            <div className="hero min-h-[60vh] " style={{ backgroundImage: `url(${detail?.displayImage})` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                <motion.div
                    initial={{  scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "easeIn",
                      stiffness: 100,
                      damping: 15,
                      duration:1,
                   
                    }}
                  >
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{detail?.category}</h1>
                        <p className="mb-5">Indulge in the luxurious experience of your stay within the opulent confines of our {detail.category} room.</p>
                    </div>
                    </motion.div>
                   
                </div>
            </div>

            {/* Room Description    */}

            <div className="max-w-7xl mx-auto mt-10 flex flex-col lg:flex-row  gap-5 mb-5">
                {/* des */}
                <div className="space-y-2 flex-1 border-solid border-r-2 border-accent  p-5">
                    <h2 className="text-4xl font-bold text-accent text-center">ROOM DESCRIPTION</h2>

                    <p className="text-xl md:text-2 xl pb-5">{detail?.description}</p>
                    <div className="grid grid-cols-2 text-lg gap-4 p-3 font-medium">
                        <div className="flex items-center gap-2">
                            <img className="w-10" src="https://i.ibb.co/D1ntZ9n/tag.png" alt="" />
                            <p>Price: ${detail?.pricePerNight}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img className="w-10" src="https://i.ibb.co/z47Mxp7/house-size.png" alt="" />
                            <p>Room Size: {detail?.roomSize}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img className="w-10" src="https://i.ibb.co/BzH52CY/seats.png" alt="" />
                            <p>Seat: {confirm ? `${detail.seat - 1}` : `${detail.seat}`}</p>
                        </div>

                        {/* Check available */}

                        <div className="flex items-center gap-3">
                            <div>
                                {
                                    confirm ? <img className="w-16" src="https://i.ibb.co/zGqD3GC/not-available-circle.png" alt="" /> : <img className="w-10" src="https://i.ibb.co/PgK8j2s/available.png" alt="" />
                                }
                            </div>

                            <p>Available: <span className="font-bold ">{confirm ? 'No Available Room. Try different date.' : 'Available'}</span></p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img className="w-10" src="https://i.ibb.co/vHP6nnr/ribbon.png" alt="" />
                            <p>Special Offer: {detail?.specialOffers}</p>
                        </div>
                    </div>

                    {/* Review   */}

                    <div className="">
                        <button className="btn btn-accent capitalize " onClick={() => document.getElementById('review').showModal()}>Check our Customer Reviews <img className="w-5" src="https://i.ibb.co/tskjk9B/rating.png" alt="" /> </button>
                        <dialog id="review" className="modal ">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Reviews of <span className="text-accent">{detail.category}</span></h3>

                                {
                                    reviewData.filter(review => review.roomId == detail._id).length > 0 ?
                                        <div>
                                            {
                                                reviewData.filter(review => review.roomId == detail._id).map(review =>
                                                    <div key={review._id} className="p-4 border-solid border-b-2 border-accent">
                                                        <div className="flex items-center font-bold text-2xl gap-2 capitalize">
                                                            <img className="w-10" src="https://i.ibb.co/GCNcx9r/profile.png" alt="" />
                                                            <p>{review.name}</p>
                                                        </div>
                                                        <p className="py-2">Date: {review.time}</p>
                                                        <div className="rating rating-md ">
                                                            {
                                                                [1, 2, 3, 4, 5].map((a, index) => (
                                                                    <input key={index} type="radio" name={`rating-${review._id}`} className="mask mask-star-2 bg-accent " checked={a <= review.rating} readOnly />
                                                                ))
                                                            }

                                                        </div>
                                                        <p className="text-xl capitalize"><span className="text-lg font-bold">Comment:</span> {review.comment}</p>
                                                    </div>)
                                            }
                                        </div>
                                        :
                                        <div className="text-2xl font-bold capitalize pt-4">
                                            <div className="flex justify-center">
                                                <img className="w-48" src="https://i.ibb.co/nPqspWg/search.png" alt="" />
                                            </div>                                             <p>there is no review for this room</p>
                                        </div>





                                }
                            </div>
                        </dialog>
                    </div>

                    {/* check date */}

                    <div className="flex items-center justify-center gap-3">
                        <h1>Check Available Room:</h1>
                        <input onChange={(e) => setDate(e.target.value)} type="date" defaultValue={moment().format().split('T')[0]} required className="input input-accent" min={moment().format().split('T')[0]} />
                    </div>
                    <div className="flex justify-center pt-4">
                        {confirm ? <button className="btn btn-accent" disabled="disabled">Book Now</button> :
                            <button className="btn btn-accent" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Now</button>}
                    </div>
                </div>
                {/* carousel */}
                <div className="carousel w-full flex-1 max-h-96">
                    {
                        images.map((image, index) =>

                            <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full">
                                <img src={image} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href={`#slide${index === 0 ? images.length : index}`} className="btn btn-circle">❮</a>
                                    <a href={`#slide${index === images.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
                                </div>
                            </div>


                        )}
                </div>
            </div>

            {/* Booking  */}
            <dialog id="my_modal_5" className="modal ">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Information of Booking for <span className="text-accent">{detail?.category}</span></h3>

                    <div className="">

                        {/* booking Information */}

                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <label className="input-group">
                                    <span>Email</span>
                                    <input type="text" value={user.email} readOnly className="input input-bordered input-accent" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <label className="input-group">
                                    <span>Name</span>
                                    <input type="text" required name="name" placeholder="name" className="input input-bordered input-accent" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Phone Number</span>
                                </label>
                                <label className="input-group">
                                    <span>phone</span>
                                    <input type="number" required name="number" placeholder="contact number" className="input input-bordered input-accent" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Pick a Date</span>
                                </label>
                                <label className="input-group">
                                    <span>Date</span>
                                    <input type="date" name="date" value={date} readOnly required className="input input-bordered  input-accent" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Total Price</span>
                                </label>
                                <label className="input-group">
                                    <span>price</span>
                                    <input type="text" value={`$${detail?.pricePerNight}`} readOnly className="input input-bordered  input-accent" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Payment Details</span>
                                </label>
                                <label className="input-group">
                                    <span>Payment</span>
                                    <select name="payment" className="select select-accent w-full max-w-xs">
                                        <option>Cash</option>
                                        <option>Bank/Card</option>
                                        <option>Mobile Bank</option>
                                    </select>
                                </label>
                            </div>
                            <div className="flex justify-between p-4 gap-3">
                                <form method="dialog" >
                                    <button className="btn  btn-accent">Close</button>
                                </form>
                                <div>
                                    <input type="submit" value='Summary' className="btn btn-accent " />
                                </div>
                            </div>
                        </form>
                        <dialog id="my_modal_4" className="modal">
                            {acc ?

                                //    User review

                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Thank You for choosing us</h3>
                                    <h3 className="font-bold text-xl">Review Our Service</h3>
                                    <form onSubmit={handleReview}>
                                        <p>name</p>
                                        <input type="text" placeholder="name" value={bookingData.name} readOnly name="name" className="input input-bordered input-accent w-full max-w-xs" />
                                        <p>Rating</p>
                                        <select name="rating" className="input input-bordered input-accent w-full max-w-xs">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>

                                        <p>Comment</p>
                                        <input type="text" placeholder="comment" name="comment" className="input input-bordered input-accent w-full max-w-xs" />
                                        <p>date</p>
                                        <input type="date" placeholder="rating" name="date" value={moment().format().split('T')[0]} readOnly className="input input-bordered input-accent w-full max-w-xs" />

                                        <div className="p-4 flex justify-center">
                                            <input type="submit" value='Submit Review' className="btn btn-accent " />
                                        </div>
                                    </form>

                                </div>
                                :

                                // Confirm

                                <div className="modal-box">
                                    <form method="dialog">

                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 className="font-bold text-2xl">Confirm Your Booking</h3>
                                    <div className="text-lg space-y-2 pt-3 text-black">
                                        <p className=""><span className="text-accent font-bold text-xl">Your Room:</span> {detail.category}</p>
                                        <p className=" "><span className="text-accent font-bold text-xl">Booking Name:</span> {bookingData.name}</p>
                                        <p className=""><span className="text-accent font-bold text-xl">Booking Date:</span> {bookingData.date}</p>
                                        <p className=""><span className="text-accent font-bold text-xl">Total Price:</span> ${bookingData.price}</p>
                                        <div className="flex justify-center">
                                            <button onClick={handleBooking} className="btn btn-accent ">Confirm Booking</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </dialog>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default Details;










