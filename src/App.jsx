import "./App.css";
import Layout from "./Components/Layout.jsx";
import hero from "./Assets/hero.png";
import frame from "./Assets/hero-frame.png";

function App() {
  return (
    <>
      <Layout>
        <div className="flex flex-col relative">
          <img src={frame} alt="hero" className="w-[700px] absolute" />
          <img src={hero} alt="hero" className="w-[1000px]" />
        </div>
      </Layout>
    </>
  );
}

export default App;
