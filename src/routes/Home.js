import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import News from "../components/News";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://media.istockphoto.com/id/1151915829/vector/health-care-icon-pattern-medical-innovation-concept-background-design.jpg?s=612x612&w=0&k=20&c=FJPhXY-fMHbgNfgJXbsLux8MrKI6nehtpBUd0OHOvRM="
        title="Public Health Officers Assosciation Of Ethiopia"
        text=""
        buttonText="CPD"
        url="/"
        btnClass="show"
      />
      <News />
      <Footer />
    </>
  );
}

export default Home;
