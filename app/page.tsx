// We import ready pages here!
import ChefPage from "@/app/pages/DaKU720/OurChef/page";
import Navbar from "./pages/Fio/WelcomeRestaurant/page";

const Home = () => {
  return (
      <main>
        <Navbar />
        <ChefPage />
      </main>
  )
}
export default Home