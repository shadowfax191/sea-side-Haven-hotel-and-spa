/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";


const Gallery = () => {
    window.scrollTo(0,0)
const handleContact=(e)=>{
    e.preventDefault()
    toast.success('Massage Send')
    e.target.reset()
}
    return (
        <div>
            <Helmet>
                <title>Sea Hotel | Gallery </title>
            </Helmet>
            <div className="max-w-7xl mx-auto py-10">
                <h1 className="text-center space-y-3 text-5xl font-extrabold pb-10">Contact Us </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                    <div className="text-center space-y-3 ">
                        <p className="text-3xl font-bold">Physical Address</p>
                        <p className="font-semibold text-lg">DolPhin more,
                           <p> Cox's Bazar Sea Beach</p>
                           <p> Cox's Bazar</p> </p>
                    </div>
                    <div className="text-center space-y-3">
                        <p className="text-3xl font-bold">Phone Numbers</p>
                        <p className="font-semibold text-lg">General Inquiries: +880 0000000000</p>
                        <p className="font-semibold text-lg">Reservations:      +880 1111111111</p>
                        <p className="font-semibold text-lg">Customer Support:  +880 2222222222</p>
                    </div>
                    <div className="text-center space-y-3 col-span-2">
                        <p className="text-3xl font-bold">Email Addresses</p>
                        <p className="font-semibold text-lg">General Inquiries: info@yourhotel.com</p>
                        <p className="font-semibold text-lg">Reservations: reservations@yourhotel.com</p>
                        <p className="font-semibold text-lg">Customer Support: support@yourhotel.com</p>
                    </div>
                   
                </div>
                <div className="text-center  space-y-3 pt-10">
                       <form onSubmit={handleContact} className=" space-y-3 pt-10">
                       <p className="text-3xl font-bold">Contact Form</p>
                        <p className="font-semibold text-lg ">Name: <input type="text" required  placeholder="Name" className="input  input-bordered input-accent w-full max-w-xs" /> </p>
                        <p className="font-semibold text-lg">Contact: <input type="number" required placeholder="Contact" className="input input-bordered input-accent w-full max-w-xs" /></p>
                        <p className="font-semibold text-lg">Email:  <input type="text" required placeholder="Email" className="input input-bordered input-accent w-full max-w-xs" /></p>
                        <p className="font-semibold text-lg">Message: <input type="text" required placeholder="Type your message here" className="input input-bordered input-accent w-full max-w-xl" /></p>
                        <input  className="btn btn-accent" type="submit" />
                     
                       </form>
                    </div>
            </div>
        </div>
    );
};

export default Gallery;