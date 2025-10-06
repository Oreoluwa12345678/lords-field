import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Intelligence from "../components/Intelligence";
import Nourishment from "../components/Nourishment";
import Spiritual from "../components/Spiritual";
import Store from "../components/Store";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Spiritual />
      <Intelligence />
      <Nourishment />
      <Store />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
