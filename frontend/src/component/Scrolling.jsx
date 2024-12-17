import React, { useRef } from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";

const click = "/images/painting/click.png";
const painting = "/images/painting/drawing.jpg";
const drawing = "/images/painting/painting1.jpg";
const sculpture = "/images/sculpture.png";
const wallart = "/images/wallart/wallart.png"
const photo = "/images/photograaphy/photo.png";
const poem = "/images/poem.jpg";


const Scrolling = () => {
    const navigate = useNavigate()
    // Reference for the scrollable area
    const targetRef = useRef(null);

    // Scroll progress hook
    const { scrollYProgress } = useScroll({ target: targetRef });

    // Transform the scroll progress to control the horizontal movement
    const x = useTransform(scrollYProgress, [0, 0, 0, 1], ["90%", "60%", "30%", "-50%"]);

    return (
        <section ref={targetRef} className="relative h-[148vh] overflow-hidden">
            <div className="sticky top-0 h-[65vh] flex items-end justify-center">
                <div className="font-bold ">
                    <p className=" sticky text-3xl uppercase leading-tight md:text-[6rem] z-50 text-[#6656ce] tracking-wider drop-shadow-lg">Collections</p>
                    <p className=" text-center text-2xl text-[#272727] sticky z-50">Posted by some of the best artist</p>

                </div>

            </div>

            <motion.div
                style={{ x }}
                className="flex gap-16 py-5 min-w-[350%] overflow-x-visible"
            >
                <div className="w-[420px] h-[350px] flex-shrink-0 border border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    <img
                        src={photo}
                        alt="photo"
                        className="w-full h-60 object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-90"
                    />

                    <div className="flex justify-between items-center mt-4 px-4">
                        <p className="text-sm text-gray-700 font-semibold">By: Ramesh</p>
                        <button onClick={() => {
                            window.scrollTo(0, 0); // Scroll to top
                            navigate("/checkout");
                        }} className="bg-green-600 text-white px-6 py-2 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out hover:bg-green-700 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500">
                            Buy now
                        </button>
                    </div>
                </div>
                <div className="w-[420px] h-[350px] flex-shrink-0 border border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    <img
                        src={click}
                        alt="photo"
                        className="w-full h-60 object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-90"
                    />

                    <div className="flex justify-between items-center mt-4 px-4">
                        <p className="text-sm text-gray-700 font-semibold">By: Olivia</p>
                        <button onClick={() => {
                            window.scrollTo(0, 0); // Scroll to top
                            navigate("/checkout");
                        }} className="bg-green-600 text-white px-6 py-2 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out hover:bg-green-700 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500">
                            Buy now
                        </button>
                    </div>
                </div>
                <div className="w-[420px] h-[350px] flex-shrink-0 border border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    <img
                        src={sculpture}
                        alt="photo"
                        className="w-full h-60 object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-90"
                    />

                    <div className="flex justify-between items-center mt-4 px-4">
                        <p className="text-sm text-gray-700 font-semibold">By: John</p>
                        <button onClick={() => {
                            window.scrollTo(0, 0); // Scroll to top
                            navigate("/checkout");
                        }} className="bg-green-600 text-white px-6 py-2 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out hover:bg-green-700 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500">
                            Buy now
                        </button>
                    </div>
                </div>
                <div className="w-[420px] h-[350px] flex-shrink-0 border border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    <img
                        src={painting}
                        alt="photo"
                        className="w-full h-60 object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-90"
                    />

                    <div className="flex justify-between items-center mt-4 px-4">
                        <p className="text-sm text-gray-700 font-semibold">By: Leo</p>
                        <button onClick={() => {
                            window.scrollTo(0, 0); // Scroll to top
                            navigate("/checkout");
                        }} className="bg-green-600 text-white px-6 py-2 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out hover:bg-green-700 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500">
                            Buy now
                        </button>
                    </div>
                </div>
                <div className="w-[420px] h-[350px] flex-shrink-0 border border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    <img
                        src={wallart}
                        alt="photo"
                        className="w-full h-60 object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-90"
                    />

                    <div className="flex justify-between items-center mt-4 px-4">
                        <p className="text-sm text-gray-700 font-semibold">By: lily</p>
                        <button onClick={() => {
                            window.scrollTo(0, 0); // Scroll to top
                            navigate("/checkout");
                        }} className="bg-green-600 text-white px-6 py-2 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out hover:bg-green-700 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500">
                            Buy now
                        </button>
                    </div>
                </div>
                <div className="w-[420px] h-[350px] flex-shrink-0 border border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    <img
                        src={photo}
                        alt="photo"
                        className="w-full h-60 object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-90"
                    />

                    <div className="flex justify-between items-center mt-4 px-4">
                        <p className="text-sm text-gray-700 font-semibold">By: Jasper</p>
                        <button onClick={() => {
                            window.scrollTo(0, 0); // Scroll to top
                            navigate("/checkout");
                        }} className="bg-green-600 text-white px-6 py-2 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out hover:bg-green-700 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500">
                            Buy now
                        </button>
                    </div>
                </div>
                <div className="w-[420px] h-[350px] flex-shrink-0 border border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                    <img
                        src={drawing}
                        alt="photo"
                        className="w-full h-60 object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:opacity-90"
                    />

                    <div className="flex justify-between items-center mt-4 px-4">
                        <p className="text-sm text-gray-700 font-semibold">By: leon</p>
                        <button onClick={() => {
                            window.scrollTo(0, 0); // Scroll to top
                            navigate("/checkout");
                        }} className="bg-green-600 text-white px-6 py-2 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out hover:bg-green-700 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500">
                            Buy now
                        </button>
                    </div>
                </div>


            </motion.div>


        </section>
    );
};

export default Scrolling;
