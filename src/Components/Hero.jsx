// Assets
import frame from "../assets/hero-frame.png";
import backgroundImg from "../assets/banner-background1440.png";
import contactImage from "../assets/contact-us.png";
import { PiDrop } from "react-icons/pi";
import NavBar from "./Navbar";

export default function Hero() {
  return (
    <div
      className="relative w-screen md:h-screen"
      name="home"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 z-0">
        <img
          className="w-full object-cover md:w-11/12 lg:w-8/12"
          src={frame}
          alt="Hero"
        />
      </div>

      <NavBar />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="max-w-8xl mx-auto py-32 sm:py-48 lg:py-56">
          <div>
            <div className="flex justify-around ">
              <div className="max-w-3xl text-left">
                <h1 className="text-4xl font-semibold tracking-tight text-[#2E8CAD] sm:text-6xl">
                  Talent For AI
                </h1>
                <p className="mt-12 w-96 text-justify text-lg leading-8 text-black">
                  Revolutionize your customer experience with our AI chatbot,
                  offering natural language understanding, personalized
                  recommendations, and seamless purchasing. Our experts will
                  elevate your customer interactions.
                </p>
                <ul className="leading-2 mt-4 text-lg font-semibold text-[#2E8CAD]">
                  <a href="javascript:void()">
                    <li className="flex items-center justify-start gap-2">
                      <PiDrop />
                      <span>services 1</span>
                    </li>
                  </a>
                  <a href="javascript:void()">
                    <li className="flex items-center justify-start gap-2">
                      <PiDrop />
                      <span>services 2</span>
                    </li>
                  </a>
                  <a href="javascript:void()">
                    <li className="flex items-center justify-start gap-2">
                      <PiDrop />
                      <span>services 3</span>
                    </li>
                  </a>
                </ul>
                <div className="justify-left mt-10 flex items-center gap-x-6">
                  <a
                    href="javascript:void()"
                    className="hover:bg-white-500 rounded-full border border-2 border-[#95D4EB] bg-[#95D4EB] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-[#95D4EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    I need help
                  </a>
                </div>
              </div>
              <img
                className="hidden h-auto w-auto max-w-lg object-cover md:flex md:h-96 md:w-96"
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
