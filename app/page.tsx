// We import ready pages here!
import ChefPage from "@/app/pages/DaKU720/OurChef/page";
import Navbar from "./pages/Fio/Navbar/page";
import HeroSection from "./pages/Fio/LandingPage/page";

const Home = () => {
  return (
      <main>
        <Navbar />
        <HeroSection />
        <ChefPage />
      </main>
  )
}
export default Home