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
      <div className="mx-auto max-w-screen-xl justify-between gap-16 px-4 text-gray-600 md:px-8 lg:flex">
        <div>
          <div className="md:max-w-8xl max-w-6xl space-y-3">
            <h3 className="flex items-center justify-center text-3xl font-bold text-[#2E8CAD]">
              ABOUT US
            </h3>
          </div>
          <div className="grid grid-flow-col grid-rows-2 gap-12 p-4">
            <div className="w-40">
              <TbCircleNumber1 className="h-6 w-6 text-[#2E8CAD]" />

              <p className=" text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                laudantium architecto dignissimos.
              </p>
            </div>
            <div className="w-40">
              <TbCircleNumber2 className="h-6 w-6 text-[#2E8CAD]" />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                laudantium architecto dignissimos.
              </p>
            </div>
            <div className="w-40">
              <TbCircleNumber3 className="h-6 w-6 text-[#2E8CAD]" />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                laudantium architecto dignissimos.
              </p>
            </div>
            <div className="w-40">
              <TbCircleNumber4 className="h-6 w-6 text-[#2E8CAD]" />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                laudantium architecto dignissimos.
              </p>
            </div>
            <div className="w-40">
              <TbCircleNumber5 className="h-6 w-6 text-[#2E8CAD]" />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                laudantium architecto dignissimos.
              </p>
            </div>
            <div className="w-40">
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
