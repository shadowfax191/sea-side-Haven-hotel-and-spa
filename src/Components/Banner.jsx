import { Link } from "react-router-dom";
import { motion } from "framer-motion"
const Banner = () => {
  return (
    <div className="">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/qCcH5HK/0x0.webp)' }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                  <motion.div
                    initial={{ x: -200,Y:0, scale: 0 }}
                    animate={{ x: 0, y: 0, scale: 1 }}
                    transition={{
                      type: "easeIn",
                      stiffness: 100,
                      damping: 15,
                      duration:2,
                   
                    }}
                  >
                    <img src="https://i.ibb.co/yS58ftC/Oceanview-Room.jpg" className="max-w-sm md:max-w-lg rounded-lg shadow-2xl" />
                    </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: 1,
                      duration: 2,
                    }}

                  > <div>
                      <h1 className="text-5xl font-bold ">Special <span className="text-accent">offers</span> </h1>
                      <p className="py-6 text-lg font-medium">Indulge in the serenity of our captivating beach view rooms with an exclusive discount, unlocked upon your very first login.</p>
                      <Link to='/login'><button className="btn btn-outline btn-accent">Log in now</button></Link>


                    </div></motion.div>

                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="text-white text-3xl btn btn-ghost ">❮</a>
            <a href="#slide2" className="text-white text-3xl btn btn-ghost ">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/4VxqKyw/RR-Standard-2-Queen.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <img src="https://i.ibb.co/p1gLT9R/premium-room-4.jpg" className="max-w-sm md:max-w-lg rounded-lg shadow-2xl" />
                  <div>
                    <h1 className="text-5xl font-bold">Discounts<span className="">!</span></h1>
                    <p className="py-6 text-lg font-medium ">Savor the opulence of our VIP room at an exclusive discounted rate on weekends</p>
                    <p className="text-sm py-3">*Terms and Conditions Applied</p>
                    <button className="btn btn-outline btn-accent">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="text-white text-3xl btn btn-ghost   ">❮</a>
            <a href="#slide3" className="text-white text-3xl btn btn-ghost ">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/g6bzNjb/140127103345-peninsula-shanghai-deluxe-mock-up.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-4xl">
                <h1 className="mb-10 text-5xl font-bold ">Discover Our <span className="text-accent"> Rooms in Photos</span></h1>
                <div className="grid grid-cols-2 gap-7">
                  
                  <img src="https://i.ibb.co/p1gLT9R/premium-room-4.jpg" className="w-48 h-24 md:w-80 md:h-52 rounded-lg shadow-2xl" />
                  <img src="https://i.ibb.co/4VxqKyw/RR-Standard-2-Queen.jpg" className="w-48 h-24 md:w-80 md:h-52 rounded-lg shadow-2xl" />
                  <img src="https://i.ibb.co/qCcH5HK/0x0.webp" className="w-48 h-24 md:w-80 md:h-52 rounded-lg shadow-2xl" />
                  <img src="https://i.ibb.co/yS58ftC/Oceanview-Room.jpg" className="w-48 h-24 md:w-80 md:h-52 rounded-lg shadow-2xl" />
                </div>

              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="text-white text-3xl btn btn-ghost ">❮</a>
            <a href="#slide1" className="text-white text-3xl btn btn-ghost ">❯</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;