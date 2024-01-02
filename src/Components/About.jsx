import aboutImg from "../assets/img/2-aboutUs582.png";

const About = () => {
  return (
    <section name="about" className="pb-6 pt-24 sm:pb-6 md:pt-32">
      <div className="mx-auto max-w-screen-xl justify-between gap-16 px-4 text-gray-600 md:px-8 lg:flex">
        <div>
          <div className="md:max-w-8xl max-w-6xl space-y-3">
            <h3 className="text-xl font-semibold text-[#132577]">
              FEW WORDS ABOUT US
            </h3>
            <p className="text-3xl font-bold text-gray-800 sm:text-2xl">
              We Are Leaders in It Solutions
            </p>
            <p className="text-justify">
              At the forefront of technological innovation, we are the leaders
              in IT solutions. With a relentless commitment to excellence, we
              provide cutting-edge technology services and solutions to help
              businesses thrive in the digital age. Our passion for innovation
              drives us to deliver top-notch IT solutions that transform your
              business and empower your success. Welcome to a world where
              technology meets expertise – welcome to our world."
            </p>
          </div>
          <div className="mt-6 max-w-lg md:max-w-4xl lg:max-w-none">
            <ul className="grid list-inside list-disc grid-cols-2 grid-rows-2 gap-4 font-semibold text-black md:grid-cols-4">
              <li className="hover:list-decimal">Vision and Commitment</li>
              <li className="hover:list-decimal">Expertise and Innovation</li>
              <li className="hover:list-decimal">Customer-Centric Approach</li>
              <li className="hover:list-decimal">Company Culture</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <img
            src={aboutImg}
            alt="about us"
            className="hidden w-[400px] max-w-xl md:flex lg:w-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
