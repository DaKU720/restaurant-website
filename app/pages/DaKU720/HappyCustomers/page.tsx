import ReviewCard from "@/app/elements/molecules/ReviewCard";

const HappyCustomers = () => {
    return (
        <div className="h-screen flex flex-col justify-center">
            <div className="text-center">
                <h2 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6">Our Happy Customers</h2>
                <p className="text-lg md:text-xl">Enjoy top-quality food and service at our restaurant.</p>
            </div>
            <div className="mt-15">
                <ReviewCard />
            </div>
        </div>
    )
}
export default HappyCustomers