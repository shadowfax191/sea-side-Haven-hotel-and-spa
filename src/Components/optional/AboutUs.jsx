/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
    window.scrollTo(0,0)

    return (
        <div className="max-w-7xl mx-auto">
            <Helmet>
                <title>Sea Hotel | About Us </title>
            </Helmet>

            <div className="text-center flex justify-center">
                <img src="https://i.ibb.co/KXPSgwt/man.png" alt="" />
            </div>
            <div className="text-center space-y-3 p-5">
                <h1 className="text-5xl font-bold">Welcome to our hotel, Where Every Stay is a Journey of Delight</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 p-5 gap-10">
                <div className="">
                    <p className="text-3xl font-bold">History</p>
                    <p className="font-semibold text-lg">Our hotel's journey began several decades ago when it was founded by a visionary entrepreneur with a deep love for hospitality. Over the years, we've grown from a modest establishment to a renowned destination for travelers seeking comfort, luxury, and warm hospitality.</p>

                </div>
                <div>
                <p className="text-3xl font-bold">Mission</p>
                    <p className="font-semibold text-lg">Our mission is simple but powerful: to create unforgettable experiences for our guests. We're committed to providing exceptional service, ensuring your comfort, and making your stay with us truly memorable.</p>
                </div>
                <div>
                <p className="text-3xl font-bold">Our Values</p>
                    <p className="font-semibold text-lg">Our values reflect who we are and what we stand for. They include a relentless pursuit of excellence, a dedication to unwavering customer satisfaction, maintaining the highest standards of integrity, and a continuous commitment to improvement.</p>
                </div>
                <div>
                <p className="text-3xl font-bold">Meet Our Team</p>
                    <p className="font-semibold text-lg">Our values reflect who we are and what we stand for. They include a relentless pursuit of excellence, a dedication to unwavering customer satisfaction, maintaining the highest standards of integrity, and a continuous commitment to improvement.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;