
export function HyperTextDemo() {
    return (
        <div className="overflow-hidden">
            {/* Wrapping the text in HyperText component for animation */}
            <HyperText text="Frame It" duration={800} animateOnLoad={true}>
                <p className="absolute top-[35%] left-12 font-bold text-3xl uppercase leading-tight md:text-[6rem] z-0 text-[#6656ce] tracking-wider drop-shadow-lg">
                    <span className="block md:inline">Frame</span> <span className="block md:inline">It</span>
                </p>
            </HyperText>
        </div>
    );
}
