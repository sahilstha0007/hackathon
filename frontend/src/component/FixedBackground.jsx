import React from "react";
import { useNavigate } from "react-router-dom";

const BackgroundSection = () => {
    const navigate = useNavigate()
    return (
        <div
            className="relative bg-fixed bg-cover bg-center h-screen flex items-center justify-center"
            style={{
                backgroundImage: "url('/images/cover.png')",
                position: 'relative',
            }}
        >
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black opacity-50"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
            ></div>

            {/* Content goes here */}
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for better text visibility */}
            <div className="relative z-10 text-center text-white">
                <h1 className="text-6xl font-bold"><span className="text-[#681dad]">Join</span> Us</h1>
                <p className="mt-4 text-2xl">in our<span className=" text-[#681dad]"> journey</span> </p>
                <button className=" bg-[#681dad] text-white px-14 py-2 rounded-2xl mt-2 text-2xl" onClick={() => { navigate("/art") }}>Click</button>
            </div>    </div>


    );
};

export default BackgroundSection;
