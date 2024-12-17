import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Helper function to get a random integer
const getRandomInt = (max) => Math.floor(Math.random() * max);

export function HyperText({
    text,
    duration = 800,
    framerProps = {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 3 },
    },
    className = "",
    animateOnLoad = true,
    children, // Define the children prop here
}) {
    const [displayText, setDisplayText] = useState(text.split(""));
    const iterations = useRef(0);
    const isFirstRender = useRef(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!animateOnLoad && isFirstRender.current) {
                clearInterval(interval);
                isFirstRender.current = false;
                return;
            }

            if (iterations.current < text.length) {
                setDisplayText((t) =>
                    t.map((l, i) =>
                        l === " "
                            ? l
                            : i <= iterations.current
                                ? text[i]
                                : alphabets[getRandomInt(26)]
                    )
                );
                iterations.current = iterations.current + 0.1;
            } else {
                clearInterval(interval);
            }
        }, duration / (text.length * 10));

        return () => clearInterval(interval);
    }, [text, duration, animateOnLoad]);

    return (
        <div className="flex scale-100 cursor-default overflow-hidden py-2">
            <AnimatePresence mode="wait">
                {displayText.map((letter, i) => (
                    <motion.span
                        key={i}
                        className={`font-mono ${letter === " " ? "w-3" : ""} ${className}`}
                        {...framerProps}
                    >
                        {/* Render the letter if it is part of the displayText */}
                        {letter.toUpperCase()}
                    </motion.span>
                ))}
            </AnimatePresence>

            {/* Optionally, render children if you want to display them below or around */}
            {children && <div className="additional-content">{children}</div>}
        </div>
    );
}
