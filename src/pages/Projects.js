import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center">Our Projects</h2>
        <p className="text-center mt-4">From cultural workshops to youth education, we are making an impact.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
