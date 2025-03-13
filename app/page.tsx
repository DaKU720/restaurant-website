// We import ready pages here!
import ChefPage from "@/app/pages/DaKU720/OurChef/page";
import Navbar from "./pages/Fio/Navbar/page";
import HeroSection from "./pages/Fio/LandingPage/page";
import SpecialDishes from "./pages/Fio/SpecialDishes/page";
import WelcomeRest from "./pages/Fio/WelcomeRestaurant/page";
import HappyCustomers from "./pages/DaKU720/HappyCustomers/page";
import Footer from "@/app/pages/DaKU720/Footer/page";

const Home = () => {
  return (
      <main>
        <Navbar />
        <HeroSection />
        <SpecialDishes />
        <WelcomeRest />
        <ChefPage />
        <HappyCustomers />
      </main>
  )
}
export default Home