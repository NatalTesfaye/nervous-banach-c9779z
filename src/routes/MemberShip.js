import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MembershipForm from "../components/Membershipform";

function MemberShip() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://media.istockphoto.com/id/1413603540/photo/doctor-researcher-or-scientist-browsing-the-internet-on-a-tablet-for-information-while.jpg?s=612x612&w=0&k=20&c=nHU23UEbj4jBXPGKZHsicZSS-F0iYm3rOeAASDgBe8U="
        title="MEMBERSHIP"
        btnClass="hide"
      />

      <MembershipForm />
      <Footer />
    </>
  );
}

export default MemberShip;
