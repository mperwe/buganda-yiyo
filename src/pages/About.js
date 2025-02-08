import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center">About Buganda YIYO</h2>
        <p className="text-center mt-4 text-lg">We are a cultural youth group preserving Buganda’s heritage while promoting youth empowerment.</p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
