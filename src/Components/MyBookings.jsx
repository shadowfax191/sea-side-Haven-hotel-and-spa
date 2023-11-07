import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import moment from "moment";




const MyBookings = () => {
    const [bookedData, setBooked] = useState([])
    const { user } = useContext(AuthContext)
    const uId = user.uid;
    const today = moment().format().split('T')[0]
    const [date, seDate] = useState({})
    const [id, seId] = useState('')
    const [Delete, setDelete] = useState(true)


    const [roomID, setRoomId] = useState({})
    const [dateID, setDateId] = useState({})



    const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD');

    console.log(today);

    useEffect(() => {
        axios.get(`http://localhost:5000/bookingData/${uId}`, { withCredentials: true })
            .then(res => setBooked(res.data))
    }, [uId])

    const handleDelete = () => {

        // console.log(roomID,newDate);
       

        if (tomorrow < dateID) {
            axios.delete(`http://localhost:5000/bookingData/delete/${roomID}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        const newData = bookedData.filter(booked => booked._id != roomID)

                        setBooked(newData)
                        toast.success('Cancel Booking Success',
                            {
                                style: {
                                    borderRadius: '10px',
                                    background: '#DC143C',
                                    color: '#fff',
                                },
                            })
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
        else {
            setDelete(false)

        }


    }

    const handleNewDelete = (Id, dateID) => {
        setRoomId(Id)
        setDateId(dateID)

    }

    const handleUpdate = (id) => {
        axios.put(`http://localhost:5000/booking/update/${id}`, { date })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success('Update booking date complete',
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

    const handleRefresh = () => [
        setDelete(true)
    ]

    const confirm = bookedData.some(book => book.date == date && book._id == id)

    return (
        <div className="min-h-[50vh] max-w-7xl mx-auto ">



            {
                bookedData.length ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
                        {bookedData.map(book =>

                            <div key={book._id} className="bg-base-200">
                                <div className="card  bg-base-100 shadow-xl">
                                    <figure><img className="h-60 px-10 " src={book.photo} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <div className="text-center flex justify-center">
                                            <h2 className="card-title text-2xl text-center">{book.room}</h2>

                                        </div>
                                        <p className="capitalize text-lg font-semibold">name: {book.name}</p>
                                        <p className="capitalize text-lg font-semibold" >date: {book.date}</p>
                                        <p className="capitalize text-lg font-semibold" >price: ${book.price}</p>

                                        <div className="card-actions flex justify-between">
                                            <input className="btn btn-accent mb-2 w-36" onBlur={() => seId(book._id)} onClick={() => document.getElementById('update').showModal()} value='Update date' readOnly />

                                            <input className="btn w-40 btn-accent" onBlur={() => handleNewDelete(book._id, book.date)} onClick={() => document.getElementById('delete').showModal()} value='Cancel booking' readOnly />
                                        </div>
                                        <dialog id="delete" className="modal ">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg text-center">Confirm Cancel</h3>

                                                {
                                                    Delete ? <p className="text-lg capitalize pt-2 text-center">your booking will be Cancel </p> : <p className="text-red-600 text-lg capitalize text-center  font-bold">Can not cancel today. <br /> Only can cancel a booking before 1 day from the booked date</p>
                                                }

                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 " onClick={handleRefresh}>✕</button>
                                                    </form>
                                                </div>
                                                <div className="text-center">
                                                    <button className="btn btn-accent" onClick={() => { handleDelete(book._id, book.date) }}>Confirm Cancel booking</button>
                                                </div>

                                            </div>
                                        </dialog>
                                        <dialog id="update" className="modal ">
                                            <div className="modal-box text-center">
                                                <h3 className="font-bold text-lg text-center capitalize">update date</h3>
                                                <p className="text-lg capitalize pt-2 text-center">plz update date by clicking the date </p>
                                                <input className="input input-accent my-2" onChange={(e) => seDate(e.target.value)} type="date" min={today} />
                                                {
                                                    confirm ? <p>Already Booked on this date</p>

                                                        :
                                                        ''
                                                }

                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                </div>
                                                {

                                                    date.length > 0 ? <div className="text-center">
                                                        {
                                                            confirm ?
                                                                <button className="btn btn-accent  " disabled="disabled" onClick={() => { handleUpdate(book._id) }}>Update date</button>

                                                                :

                                                                <button className="btn btn-accent" onClick={() => { handleUpdate(book._id) }}>Update date</button>
                                                        }
                                                    </div>
                                                        :
                                                        <button className="btn btn-accent  " disabled="disabled" >Update date</button>

                                                }

                                            </div>
                                        </dialog>
                                    </div>
                                </div>
                            </div>

                        )}
                    </div>
                    :
                    <div className="space-y-3 text-center capitalize m-5 flex flex-col justify-center">
                        <div className="flex justify-center">
                            <img className="w-80 " src="https://i.ibb.co/Rpdc6Dt/no-data.png" alt="" />
                        </div>
                        <h1 className="text-5xl font-bold pt-10">You Do not Have any Booking</h1>
                        <p className="text-xl">for booking Rooms, click blow </p>

                        <div >
                            <Link className="" to='/rooms'><button className="btn btn-accent">Rooms</button></Link>
                        </div>
                    </div>
            }
        </div>
    );
};

export default MyBookings;