import "./App.css";

// Components
import Layout from "./Components/Layout.jsx";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
