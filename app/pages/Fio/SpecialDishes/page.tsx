import { Button } from "@/components/ui/button";
import AnimatedDiv from "../../AnimatedDiv/AnimatedDiv";

const SpecialDishes = () => {
    const dishes = [
        {
            name: "Lumpia with Sauce",
            dish: "https://i.imgur.com/KlTiwDC.png",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        },
        {
            name: "Fish and Veggie",
            dish: "https://i.imgur.com/tNU6XQa.png",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        },
        {
            name: "Tofu Chili",
            dish: "https://i.imgur.com/062aUBt.png",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        },
        {
            name: "Egg and Cucumber",
            dish: "https://i.imgur.com/HpfUVJq.png",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        },
    ];

    return (
        <AnimatedDiv>
        <div className="w-full h-auto mt-20 md:p-20 flex flex-col items-center">
            {/* Top */}
            <div className="text-center mb-12">
                <h2 className="font-bold text-gray-800" style={{ fontSize: "var(--text-5xl)" }}>Our Special Dishes</h2>
                <p className="text-gray-600 mt-2" style={{ fontSize: "var(--text-xl)" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
            </div>

            {/* Dishes */}
            <div className="flex justify-center flex-wrap gap-4">
                {dishes.map((dish, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center w-80"
                    >
                        <img className="h-60 w-full object-cover rounded-lg"
                            src={dish.dish}
                            alt={dish.name}
                        />
                        <p className="font-semibold text-gray-800 mt-3" style={{ fontSize: "var(--text-xl)" }}>{dish.name}</p>
                        <p className="text-gray-600 mt-1 px-2" style={{ fontSize: "var(--text-lg)" }} >{dish.text}</p>
                    </div>
                ))}
            </div>
        </div>
        </AnimatedDiv>
    );
};

export default SpecialDishes;
