import React, { useState, useEffect } from 'react';

// Testimonial data
const testimonials = [
    {
        name: "lily",
        role: "artist",
        image: "/images/painting/painting1.jpg", // Replace with actual image path
        testimonial:
            "A platform that finally gives local artists like me the exposure we deserve. I’ve connected with so many art lovers and sold my creations seamlessly!",
        rating: 5,
    },
    {
        name: "Leo",
        role: "user",
        image: "/images/pic-2.jpeg", // Replace with actual image path
        testimonial:
            "I love how this site bridges the gap between artists and customers. It’s not just about selling art; it’s about building relationships and telling stories.",
        rating: 4,
    },
    {
        name: "Sophie",
        role: "user",
        image: "/images/pic-3.png", // Replace with actual image path
        testimonial:
            "I’ve discovered so many talented local artists here. The platform is user-friendly, and the art is truly one-of-a-kind!",
        rating: 5,
    },
    {
        name: "Jasper",
        role: "artist",
        image: "/images/pic-4.png", // Replace with actual image path
        testimonial:
            "Buying directly from artists has never been easier. The personal touch and quality of the pieces are unmatched!",
        rating: 5,
    },
    {
        name: "Olivia",
        role: "artist",
        image: "/images/click.png", // Replace with actual image path
        testimonial:
            "This marketplace has been a game-changer for my career. It’s easy to showcase my art, and the community is incredibly supportive!",
        rating: 4,
    },
    {
        name: "Mark Johnson",
        role: "artist",
        image: "/images/pic-1.jpg", // Replace with actual image path
        testimonial:
            "What I love most is the user-friendly interface and the attention to detail. The design is sleek, and the customer service is always there when you need it. I’ll definitely keep using this in the future!",
        rating: 5,
    },
    {
        name: "John Doe",
        role: "artist",
        image: "/images/cover.png", // Replace with actual image path
        testimonial:
            "I love supporting local talent, and this website makes it so convenient. The videos and artist stories add so much value to each purchase",
        rating: 5,
    },
    {
        name: "Jane Smith",
        role: "user",
        image: "/images/cover.png", // Replace with actual image path
        testimonial:
            "I have been using this service for months, and the results speak for themselves. It's easy to use, and the features are second to none. I couldn't be happier with my decision to join!",
        rating: 4,
    }
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalTestimonials = testimonials.length;

    // Function to handle next testimonial
    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(totalTestimonials / 2));
    };

    // Function to handle previous testimonial
    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + Math.ceil(totalTestimonials / 2)) % Math.ceil(totalTestimonials / 2)
        );
    };

    return (
        <div className="py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-6xl font-semibold mb-8 text-[#614fd1]">What Our User & Artist Says</h2>

                <div className="relative w-full overflow-hidden">
                    {/* Wrapper for sliding testimonials */}
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 50}%)`, // Move testimonials horizontally, 50% to show two at once
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-1/2 px-4" // Set width to 50% to show two testimonials per slide
                                data-aos="fade-up"
                            >
                                <div className="bg-white p-8 rounded-lg shadow-2xl">
                                    <div className="flex justify-center mb-6">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-24 h-24 rounded-full object-cover border-4 border-primary"
                                        />
                                    </div>
                                    <p className="text-lg text-[#6A5ACD] italic mb-4">
                                        {`"${testimonial.testimonial}"`}
                                    </p>
                                    <div className="flex justify-center mb-4">
                                        {Array.from({ length: testimonial.rating }, (_, index) => (
                                            <svg
                                                key={index}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-yellow-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 15.27l5.45 3.18-1.45-6.27L19 7.91l-6.36-.54L10 1 7.36 7.37 1 7.91l4.91 4.27-1.45 6.27L10 15.27z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="font-semibold text-[#6A5ACD]">{testimonial.name}</p>
                                    <p className="text-[#6A5ACD]">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div
                        onClick={prevTestimonial}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-opacity-50 bg-black text-white p-3 rounded-full cursor-pointer z-10"
                    >
                        <button>⟵</button>
                    </div>
                    <div
                        onClick={nextTestimonial}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-opacity-50 bg-black text-white p-3 rounded-full cursor-pointer z-10"
                    >
                        <button>⟶</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;
