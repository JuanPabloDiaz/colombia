// Code Source: https://www.youtube.com/watch?v=bhRUBc0xjUo

import React, { useState } from "react";
import { motion } from "framer-motion";
import missionImg from "../assets/img/19-mission.jpg";
import visionImg from "../assets/img/20-vision.jpg";
import companyImg from "../assets/img/21-company.jpg";
import customerImg from "../assets/img/22-customer.jpg";
const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: { width: "600px" },
    collapsed: { width: "300px" },
  };
  const cardImages = [missionImg, visionImg, companyImg, customerImg];
  const cardTitle = [
    "Our Mission",
    "Our Vision",
    "Our Company",
    "Our Customer",
  ];
  const cardDescriptions = [
    "To foster brand success by delivering innovative software solutions that help them thrive and distinguish themselves.",
    "To empower every brand to define new standards of excellence and distinction, using our software solutions.",
    "We're dedicated to fueling brand success with cutting-edge technology, making us the catalyst for your journey to excellence.",
    "Our customers are ambitious businesses and entrepreneurs, and we're here to empower their success with innovative software solutions.",
  ];
  return (
    <section name="company" className="pt-24 pb-6 md:pt-32 sm:pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl tracking-tight text-[#132577] sm:text-2xl">
          WE LOVE OUR WORK
        </h2>
        <p className="mt-2 text-3xl font-bold leading-8 text-black-600">
          FIND OUT MORE
        </p>
      </div>
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className={`card cursor-pointer h-[300px] md:h-[500px] bg-cover bg-center rounded-[20px] ${
              index === expandedIndex ? "expanded" : ""
            }`}
            variants={cardVariants}
            initial="collapsed"
            animate={index === expandedIndex ? "expanded" : "collapsed"}
            transition={{ duration: 0.5 }}
            onClick={() => handleCardClick(index)}
            style={{
              backgroundImage: `url(${cardImages[index]})`,
            }}
          >
            <div className="card-content h-full flex flex-col justify-end">
              <div className="card-footer rounded-b-[20px] bg-[#132577] bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                <h2 className="text-xl font-bold text-white">
                  {cardTitle[index]}
                </h2>
                {index === expandedIndex && (
                  <p className="text-white text-center">
                    {cardDescriptions[index]}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OpenCards;
