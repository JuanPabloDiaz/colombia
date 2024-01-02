import "./App.css";

// Components
import Layout from "./Components/Layout.jsx";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import ServicesInfo from "./Components/Services-info";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import Projects from "./Components/Projects";
import Team from "./Components/Team";
import Footer from "./Components/Footer";
// import Company from "./Components/Company";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        {/* <Services />
        <ServicesInfo />
        <About /> */}
        {/* <Company /> */}
        {/* <Testimonials />
        <Projects />
        <Team />
        <Footer /> */}
      </Layout>
    </>
  );
}

export default App;
