import React from "react";

const Video = () => {
    return (
        <div className="flex flex-col lg:flex-row bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 ">
            {/* Left Section - 4 Videos */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                {["dance.mp4", "painting.mp4", "slupture.mp4", "Photography.mp4"].map((video, index) => (
                    <div key={index} className="relative aspect-video group">
                        <video
                            src={`/videos/${video}`}
                            autoPlay
                            muted
                            loop
                            className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                        ></video>
                        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg group-hover:bg-opacity-10 transition-opacity duration-300"></div>
                    </div>
                ))}
            </div>

            {/* Right Section - Text */}
            <div className="lg:w-1/3 flex flex-col justify-center items-start p-8 shadow-lg bg-white">
                <h1 className="text-3xl lg:text-5xl font-bold text-[#614fd1] mb-6 leading-tight">
                    A Digital Platform for Artists
                </h1>
                <div className="flex flex-wrap gap-8">
                    {[
                        { title: "Art", count: "100+" },
                        { title: "Artists", count: "50+" },
                        { title: "Users", count: "150+" },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-start">
                            <p className="text-3xl lg:text-3xl font-semibold text-gray-700">{item.title}</p>
                            <p className="text-2xl lg:text-2xl text-gray-600">{item.count}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Video;
