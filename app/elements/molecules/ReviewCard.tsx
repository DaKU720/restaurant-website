"use client";

import {useState, useEffect} from "react";
import StarRating from "@/app/elements/atoms/StarRating";

const ReviewCard = () => {
    const customerReviews = [
        {
            avatar: "https://i.imgur.com/VtPyqLW.png",
            text: "The food here is absolutely amazing! Every bite was a delight, and the flavors were beyond perfect. The ambiance and service truly made it a five-star experience. Highly recommended!",
            name: "Emily Carter",
            position: "Food Blogger & Critic",
            rating: 5
        },
        {
            avatar: "https://i.imgur.com/yMZLdmI.png",
            text: "There will be nothing here, but the food is good. I recommend it to everyone.",
            name: "Conon Friend",
            position: "Mayor of the Town",
            rating: 5
        },
        {
            avatar: "https://i.imgur.com/1AioNC7.png",
            text: "The hygiene standards here are concerning. As a microbiologist, I observed several issues that could pose serious health risks.",
            name: "Aleksia Chodorova",
            position: "Microbiologist in Laboratory",
            rating: 1
        },
        {
            avatar: "https://i.imgur.com/cNZcXWI.png",
            text: "Decent food, but the steak lacked seasoning. Service was okay, but the waiter seemed half-asleep. Strong drinks saved the night.",
            name: "Johnny Shalony",
            position: "Cybersecurity Consultant",
            rating: 4
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 2) % customerReviews.length
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 2 + customerReviews.length) % customerReviews.length
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 20000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full flex items-center justify-center relative">
            <button
                onClick={prevSlide}
                className="absolute left-2 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded z-10 md:left-0"
            >
                ◀
            </button>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10">
                {customerReviews.slice(currentIndex, currentIndex + 2).map((review, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-gray-100 w-96 max-w-full p-6 rounded-lg shadow-lg md:border-5 md:h-85 md:max-w-lg md:p-8 md:rounded-2xl md:shadow-2xl"
                    >
                        <div className="flex items-center space-x-4">
                            <img
                                src={review.avatar}
                                alt={review.name}
                                className="w-16 h-16 rounded-full md:w-20 md:h-20"
                            />
                            <div>
                                <p className="font-bold text-lg text-gray-800 md:text-2xl">{review.name}</p>
                                <p className="text-xs text-gray-500 md:text-sm">{review.position}</p>
                            </div>
                        </div>

                        <div className="mt-2 px-4 flex flex-col justify-start flex-1">
                            <div className="flex justify-center mb-5 h-6">
                                <StarRating value={review.rating} size={20}/>
                            </div>
                            <p className="text-gray-700 text-center italic text-sm leading-relaxed overflow-hidden text-ellipsis md:text-base">
                                "{review.text}"
                            </p>
                        </div>

                        <div className="w-8 h-1 mt-4 rounded-full md:w-10 md:mt-6"></div>
                    </div>
                ))}
            </div>
            <button
                onClick={nextSlide}
                className="absolute right-2 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded z-10 md:right-0"
            >
                ▶
            </button>
        </div>
    );
};

export default ReviewCard;