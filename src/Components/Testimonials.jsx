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
      name: "Martin escobar",
      title: "Founder of meta",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.",
    },
    {
      avatar: person1,
      name: "Martin escobar",
      title: "Founder of meta",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.",
    },
    {
      avatar: person2,
      name: "Angela stian",
      title: "Product designer",
      quote:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
    {
      avatar: person3,
      name: "Karim ahmed",
      title: "DevOp engineer",
      quote:
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.",
    },
  ];

  return (
    <section className="py-14">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h2 className="flex items-center justify-center text-3xl font-bold text-[#2E8CAD]">
            Testimonials
          </h2>
        </div>
        <div className="mt-12">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {testimonials.map((item, idx) => (
              <li key={idx} className="rounded-xl bg-gray-100 p-4">
                <figure>
                  <div className="flex items-center gap-x-4">
                    <img src={item.avatar} className="h-16 w-16 rounded-full" />
                    <div>
                      <span className="block font-semibold text-gray-800">
                        {item.name}
                      </span>
                      <span className="mt-0.5 block text-sm text-gray-600">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <blockquote>
                    <p className="mt-6 text-gray-700">{item.quote}</p>
                  </blockquote>
                </figure>
                <img
                  src={starIcon}
                  className="w-140 mx-auto mt-6 h-auto duration-1000 group-hover:scale-105 group-hover:opacity-80"
                  alt="5 star rating"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
