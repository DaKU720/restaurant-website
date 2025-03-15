import NewsLetter from "@/app/elements/molecules/Newsletter";
import {Button} from "@/components/ui/button";

import {FaFacebookF, FaInstagram, FaDiscord} from "react-icons/fa";

const Footer = () => {
    return (
        <div id="footer" className="p-5">
            <div>
                <NewsLetter/>
            </div>
            <div className="flex flex-col md:flex-row justify-between text-center mt-10 gap-5">
                <div className="flex flex-col">
                    <p className="uppercase font-bold text-xs mb-3">Opening Hours</p>
                    <Button variant="link">Monday - Friday</Button>
                    <Button variant="link">9:00 - 18:00</Button>
                    <Button variant="link">Main Dishes</Button>
                </div>
                <div className="flex flex-col">
                    <p className="uppercase font-bold text-xs mb-3">Navigation</p>
                    <Button variant="link">About us</Button>
                    <Button variant="link">Contact us</Button>
                    <Button variant="link">Main Dishes</Button>
                </div>
                <div className="flex flex-col">
                    <p className="uppercase font-bold text-xs mb-3">Dishes</p>
                    <Button variant="link">Fish & Viggies</Button>
                    <Button variant="link">Egg & Cucumber</Button>
                    <Button variant="link">Lumpia with Sauce</Button>
                </div>
                <div className="flex flex-col">
                    <p className="uppercase font-bold text-xs mb-3">Follow us</p>
                    <div className="flex flex-row justify-center md:justify-start gap-5">
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