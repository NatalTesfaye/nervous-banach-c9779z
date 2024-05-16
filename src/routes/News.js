import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NEWSupdate from "../components/NEWSupdate";
import Footer from "../components/Footer";

function News() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://media.istockphoto.com/id/182175998/photo/examining-healthcare.jpg?s=612x612&w=0&k=20&c=o_wzZvkmShl7OVg-vSLYcZ4pF2YQsFLJabjt7IRA6sc="
        title="NEWS"
      />
      <NEWSupdate />
      <Footer />
    </>
  );
}

export default News;
