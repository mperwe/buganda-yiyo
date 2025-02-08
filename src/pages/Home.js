import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <div className="text-center py-10 px-6">
        <h1 className="text-4xl font-bold text-blue-800">Buganda YIYO, Buganda YANGE</h1>
        <p className="mt-4 text-lg">Empowering the Youth for a Stronger Buganda.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
