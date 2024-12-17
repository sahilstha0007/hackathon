import React, { useEffect, useRef } from "react";
import { init } from "./Frame.jsx";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate()
    const threeCanvasRef = useRef(null);

    useEffect(() => {
        // Pass the specific DOM element for Three.js rendering
        if (threeCanvasRef.current) {
            init(threeCanvasRef.current);
        }
    }, []);

    return (
        <div className="hero-section h-[95vh] w-full relative">
            {/* Conditionally render Three.js canvas */}
            <div
                ref={threeCanvasRef}
                className="absolute top-0 left-0 w-full h-full z-0 hidden md:block"
            ></div>

            {/* First Paragraph Animation */}
            <motion.p
                className="absolute top-[25%] md:top-[30%] left-6 font-bold text-7xl md:text-3xl uppercase leading-tight md:text-[6rem] lg:text-[5rem] z-10 text-[#6656ce] tracking-wider drop-shadow-lg"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.8 }}
            >
                <span className="block md:inline">Frame</span>{" "}
                <span className="block md:inline">It</span>
            </motion.p>

            {/* Second Paragraph Animation */}
            <motion.p
                className="absolute top-[60%] md:top-[40%] left-6 text-[2rem] leading-tight md:text-[2rem] lg:text-[2.5rem] z-10 text-[#434346] tracking-wider drop-shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.8 }}
            >
                <span className="block md:inline">
                    My Frame Your Art Our Platform
                </span>
            </motion.p>
            <motion.p
                className="absolute top-[68%] md:top-[49%] left-6 text-[2rem] leading-tight md:text-[1rem] lg:text-[1.5rem] z-10 text-[#434346] tracking-wider drop-shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.8 }}
            >
                <button onClick={() => { navigate("/art") }} className="block md:inline p-2 rounded-xl bg-[#6656ce] text-white ">
                    Join Now
                </button>
            </motion.p>
        </div>
    );
}

export default Hero;
