import aboutImg from "../assets/img/2-aboutUs582.png";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
  TbCircleNumber5,
  TbCircleNumber6,
} from "react-icons/tb";

const About = () => {
  return (
    <section name="about" className="pb-6 pt-24 sm:pb-6 md:pt-32">
      <div className="x-4 mx-auto w-screen max-w-screen-xl justify-between gap-16 text-gray-600 md:px-8 lg:flex">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="max-w-6xl space-y-3 md:max-w-xl">
            <h2 className="flex items-center justify-center text-3xl font-bold text-[#2E8CAD]">
              ABOUT US
            </h2>
          </div>
          <div className="m-6 grid grid-flow-col grid-rows-2 gap-12  p-4">
            <div className="w-60">
              <TbCircleNumber1 className="h-6 w-6 text-[#2E8CAD]" />

              <p className=" text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                laudantium architecto dignissimos.
              </p>
            </div>
            <div className="w-60">
              <TbCircleNumber2 className="h-6 w-6 text-[#2E8CAD]" />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                laudantium architecto dignissimos.
              </p>
            </div>
            <div className="w-60">
              <TbCircleNumber3 className="h-6 w-6 text-[#2E8CAD]" />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                laudantium architecto dignissimos.
              </p>
            </div>
            <div className="w-60">
              <TbCircleNumber4 className="h-6 w-6 text-[#2E8CAD]" />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                laudantium architecto dignissimos.
              </p>
            </div>
            <div className="w-60">
              <TbCircleNumber5 className="h-6 w-6 text-[#2E8CAD]" />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                laudantium architecto dignissimos.
              </p>
            </div>
            <div className="w-60">
              <TbCircleNumber6 className="h-6 w-6 text-[#2E8CAD]" />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                laudantium architecto dignissimos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
