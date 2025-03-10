// We import ready pages here!
import ChefPage from "@/app/pages/DaKU720/OurChef/page";
import Navbar from "./pages/Fio/Navbar/page";
import HeroSection from "./pages/Fio/LandingPage/page";
import SpecialDishes from "./pages/Fio/SpecialDishes/page";

const Home = () => {
  return (
      <main>
        <Navbar />
        <HeroSection />
        <SpecialDishes />
        <ChefPage />
      </main>
  )
}
export default Home