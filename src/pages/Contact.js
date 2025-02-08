import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
        <p className="text-center mt-4">Email us at: <strong>contact@bugandayiyo.com</strong></p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
