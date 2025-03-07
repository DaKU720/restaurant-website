import {Button} from "@/components/ui/button";

const ChefPage = () => {
    const advantageText = [
        {
            text: "Quality Ingredients",
            image: "https://i.imgur.com/ES39rm7.png"
        },
        {
            text: "Experienced Chefs",
            image: "https://i.imgur.com/ES39rm7.png"
        },
        {
            text: "Fresh Meals",
            image: "https://i.imgur.com/ES39rm7.png"
        },
        {
            text: "Innovative Recipes",
            image: "https://i.imgur.com/ES39rm7.png"
        },
        {
            text: "Sustainable Sourcing",
            image: "https://i.imgur.com/ES39rm7.png"
        },
        {
            text: "Delicious Taste",
            image: "https://i.imgur.com/ES39rm7.png"
        },
    ];
    return (
        <div className="flex flex-col md:flex-row justify-center items-center w-full h-auto md:h-screen p-4 md:p-0">

            {/* Left side - Text and buttons */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6 md:p-10 gap-6 md:gap-10">
                <div>
                    <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6">Our Expert Chef</h1>
                    <p className="text-lg md:text-xl">
                        Discover the passion and artistry of our top chef, bringing innovative recipes and exemplary
                        flavors
                        to your plate every day. With years of experience and a focus on quality, we ensure each meal is
                        memorable.
                    </p>
                </div>

                {/* 3 rows with icon and text */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {advantageText.map((advantage, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-4 text-lg md:text-xl"
                        >
                            <img
                                src={advantage.image}
                                className="h-6 md:h-5"
                                alt={advantage.text}
                            />
                            <p className="text-gray-800">{advantage.text}</p>
                        </div>
                    ))}
                </div>

                {/* Buttons section */}
                <div className="flex flex-col md:flex-row justify-start w-full space-y-4 md:space-y-0 md:space-x-4">
                    <Button className="w-full md:w-auto">Menu</Button>
                    <Button className="w-full md:w-auto bg-[#f6651c]">Book a Table</Button>
                </div>
            </div>

            {/* Right side - Chef image */}
            <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
                <img
                    src="https://i.imgur.com/BxwYgFI.png"
                    className="h-auto md:h-[800px] w-full md:w-auto object-cover"
                    alt="Chef"
                />
            </div>
        </div>
    );
};

export default ChefPage;
