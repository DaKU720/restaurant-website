import {Button} from "@/components/ui/button";

const NewsLetter = () => {
    return (
        <div
            className="max-w-full px-4 py-10 mx-auto bg-[url('https://i.imgur.com/6chUqsB.png')] bg-cover bg-center rounded-lg md:max-w-4xl md:px-10 md:py-18 md:py-20 md:rounded-[70]">
            <h2 className="text-xl text-white text-center font-bold mb-4 md:mb-10 md:text-5xl">
                Get Or Promo Code by <br/> Subscribing To our Newsletter
            </h2>
            <div className="flex flex-col items-center md:flex-row">
                <div className="flex items-center border border-white rounded-md bg-white w-full">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 flex-grow bg-transparent text-black placeholder-black focus:outline-none rounded-l-md md:py-4"
                    />
                    <Button className="bg-[#f6651c] text-white px-6 py-2 text-sm md:mr-4 md:px-4 md:py-4">
                        Subscribe
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter