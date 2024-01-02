// Source option 1: https://tailwindui.com/components/marketing/sections/testimonials
// Source Option 2: https://www.floatui.com/components/testimonials

import quoteIcon from "../assets/img/4-quote-icon80.png";
import starIcon from "../assets/img/5-star140.png";
import person1 from "../assets/img/6-testimon120.png";
import person2 from "../assets/img/7-testimon120.png";
import person3 from "../assets/img/8-testimon120.png";

const Testimonials = () => {
  const testimonials = [
    {
      avatar: person1,
      name: "Beth Escobar",
      title: "Founder of Kenzo",
      quote:
        "This team is professional, knowledgeable, and always goes above and beyond to ensure our needs are met.",
    },
    {
      avatar: person2,
      name: "Simon Andrew",
      title: "Software engineer",
      quote:
        "I highly recommend their services to anyone looking for top-notch quality and exceptional customer service.",
    },
    {
      avatar: person3,
      name: "Julia Worin",
      title: "Product designer",
      quote:
        "They deliver exceptional results and expertise that's second to none. Highly recommended!",
    },
  ];

  return (
    <section
      name="testimonials"
      className="relative pb-6 pt-24 sm:pb-6 md:pt-32"
    >
      <div className="relative mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h2 className="text-4xl tracking-tight text-[#132577] sm:text-2xl">
            TESTIMONIALS
          </h2>
          <p className="text-black-600 mt-2 text-3xl font-bold leading-8">
            Our successful clients
          </p>
        </div>
        <div className="mt-12">
          <ul className="group grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li key={idx} className="rounded-xl border bg-white shadow-md ">
                <div className="p-4 duration-1000 group-hover:scale-75 group-hover:opacity-20">
                  <img
                    src={quoteIcon}
                    className="w-140 mx-auto mt-6 h-auto opacity-60"
                    alt="5 star rating"
                  />
                </div>
                <figure>
                  <blockquote>
                    <p className="px-4 py-1 text-lg font-semibold text-gray-800">
                      {item.quote}
                    </p>
                  </blockquote>
                  <img
                    src={starIcon}
                    className="w-140 mx-auto mt-6 h-auto duration-1000 group-hover:scale-105 group-hover:opacity-80"
                    alt="5 star rating"
                  />
                  <div className="mt-6 flex items-center gap-x-4 bg-[#ffc107]/20 p-4">
                    <img
                      src={item.avatar}
                      className="h-16 w-16 rounded-full border-2 border-[#132577]"
                      alt="{item.name}"
                    />
                    <div>
                      <span className="block font-semibold text-gray-800">
                        {item.name}
                      </span>
                      <span className="mt-0.5 block text-sm text-[#132577]">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
