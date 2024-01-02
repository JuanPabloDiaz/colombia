// Assets
import frame from "../assets/hero-frame.png";
import backgroundImg from "../assets/banner-background1440.png";
import contactImage from "../assets/contact-us.png";
import service from "../assets/img/16-face50.png";
import NavBar from "./Navbar";

export default function Hero() {
  return (
    <div
      className="md:h-screen w-screen relative"
      name="home"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 z-0">
        <img className="w-[200px] object-cover" src={frame} alt="Hero" />
      </div>

      <NavBar />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-8xl py-32 sm:py-48 lg:py-56">
          <div>
            <div className="flex justify-around ">
              <div className="text-left max-w-3xl">
                <h1 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-5xl">
                  Talent For AI
                </h1>
                <p className="mt-12 text-lg leading-8 text-slate-300">
                  Revolutionize your customer experience with our AI chatbot,
                  offering natural language understanding, personalized
                  recommendations, and seamless purchasing. Our experts will
                  elevate your customer interactions.
                </p>
                <ul className="mt-4 text-lg leading-2 text-slate-300">
                  <li className="flex justify-start items-center gap-2">
                    <img src={service} alt="img" className="w-5 h-5" />
                    <span>services 1</span>
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <img src={service} alt="img" className="w-5 h-5" />
                    <span>services 2</span>
                  </li>
                  <li className="flex justify-start items-center gap-2">
                    <img src={service} alt="img" className="w-5 h-5" />
                    <span>services 3</span>
                  </li>
                </ul>
                <div className="mt-10 flex items-center justify-left gap-x-6">
                  <a
                    href="https://litslink.com/technologies"
                    className="mt-32 rounded-md bg-white hover:bg-[#92989f] px-3.5 py-2.5 text-sm font-semibold text-black hover:text-[#132577] shadow-sm hover:bg-white-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    EXPLORE MORE
                  </a>
                </div>
              </div>
              <img
                className="h-auto w-auto max-w-lg object-cover hidden md:flex md:w-96 md:h-96"
                src={contactImage}
                alt="Graphic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
