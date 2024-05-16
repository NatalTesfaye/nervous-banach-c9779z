import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

//import AboutImg from "../components/Assets/officers image.webp";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D"
        title="ABOUT US"
        btnClass="hide"
      />

      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
