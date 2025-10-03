import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Leadership from "@/components/Leadership";
import Commitment from "@/components/Commitment";
import Segments from "@/components/Segments";
import Pedagogy from "@/components/Pedagogy";
import Events from "@/components/Events";
import Enrollment from "@/components/Enrollment";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Leadership />
        <Commitment />
        <Segments />
        <Pedagogy />
        <Events />
        <Enrollment />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
