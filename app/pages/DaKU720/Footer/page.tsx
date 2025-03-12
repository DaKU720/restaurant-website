import NewsLetter from "@/app/elements/molecules/Newsletter";
import {Button} from "@/components/ui/button";

import { FaFacebookF, FaInstagram, FaDiscord } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div>
                <NewsLetter />
            </div>
            <div className="flex flex-row justify-start text-center mt-10 p-5">
                <div className="flex flex-col">
                    <p className="text-sm  ml-2 text-left">Lorem ipsum dolor sit rem ipsum dolor sit rem ipsum dolor sit rem ipsum dolor sit rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore. Lorem ipsum dolor sit rem ipsum dolor sit rem ipsum dolor sit rem ipsum dolor sit rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore. Lorem ipsum dolor sit rem ipsum dolor sit rem ipsum dolor sit rem ipsum dolor sit rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore. <a href="#">Learn more</a></p>
                </div>
                <div className="flex flex-col mr-10">
                    <p className="uppercase font-bold text-xs mb-3">Opening Hours</p>
                    <Button variant="link">Monday - Friday</Button>
                    <Button variant="link">9:00 - 18:00</Button>
                    <Button variant="link">Main Dishes</Button>
                </div>
                <div className="flex flex-col mr-10">
                    <p className="uppercase font-bold text-xs mb-3">navigation</p>
                    <Button variant="link">About us</Button>
                    <Button variant="link">Contact us</Button>
                    <Button variant="link">Main Dishes</Button>
                </div>
                <div className="flex flex-col mr-10">
                    <p className="uppercase font-bold text-xs mb-3">dishes</p>
                    <Button variant="link">Fish & Viggies</Button>
                    <Button variant="link">Egg & Cucumber</Button>
                    <Button variant="link">Lumpia with Sauce</Button>
                </div>
                <div className="flex flex-col">
                    <p className="uppercase font-bold text-xs mb-3">follow us</p>
                    <div className="flex flex-row gap-5">
                        <FaFacebookF size="25"/>
                        <FaInstagram size="25"/>
                        <FaDiscord size="25"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer