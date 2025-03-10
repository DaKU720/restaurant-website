import { Button } from "@/components/ui/button";

const WelcomeRest = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center w-full h-auto md:h-screen pt-20 md:p-0">

            {/* Right side - Chef image */}
            <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
                <img
                    src="https://i.imgur.com/Krl9c4f.png"
                    className="w-full md:w-auto max-w-full h-auto object-cover"
                    alt="Chef"
                />
            </div>

            {/* Left side - Text and buttons */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6 md:p-10 gap-6 md:gap-10">
                <div>
                    <h1 className="font-bold mb-4 md:mb-6" style={{ fontSize: "var(--text-5xl)" }}>
                        Welcome to Our<br/> Restaurant
                    </h1>
                    <p style={{ fontSize: "var(--text-xl)" }}>
                    Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor incididunt <br/> ut labore et dolore magna aliqua.
                    </p>
                </div>

                {/* Buttons section */}
                <div className="flex flex-col md:flex-row justify-start w-full space-y-4 md:space-y-0 md:space-x-4">
                    <Button className="w-full md:w-auto" style={{ fontSize: "var(--text-lg)" }}>Menu</Button>
                    <Button className="w-full md:w-auto bg-[#f6651c]" style={{ fontSize: "var(--text-lg)" }}>Book a Table</Button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeRest;
