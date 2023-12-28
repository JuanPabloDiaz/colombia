// source code: https://www.floatui.com/components/team-sections
import teamImg1 from "../assets/img/13-team380.png";
import teamImg2 from "../assets/img/14-team380.png";
// import teamImg3 from "../assets/img/15-team380.png";
import teamImg3 from "../assets/img/15-team380.jpg";
import facebookIcon from "../assets/img/16-face50.png";
import twitterIcon from "../assets/img/17-twitter50.png";
import linkedinIcon from "../assets/img/18-linkedin50.png";

const Team = () => {
  const team = [
    {
      avatar: teamImg3,
      name: "Vicky tanson",
      title: "Product Manager",
      linkedin: "https://www.linkedin.com/in/1diazdev/",
      twitter: "https://twitter.com/1diazdev",
      facebook: "https://www.facebook.com/1diazdev",
    },

    {
      avatar: teamImg1,
      name: "Daniel martin",
      title: "Code Expert",
      linkedin: "https://www.linkedin.com/in/1diazdev/",
      twitter: "https://twitter.com/1diazdev",
      facebook: "https://www.facebook.com/1diazdev",
    },
    {
      avatar: teamImg2,
      name: "Martiana dialan",
      title: "Human Resources",
      linkedin: "https://www.linkedin.com/in/1diazdev/",
      twitter: "https://twitter.com/1diazdev",
      facebook: "https://www.facebook.com/1diazdev",
    },
  ];

  return (
    <section name="team" className="pt-24 pb-6 md:pt-32 sm:pb-6">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-auto lg:mx-0 text-center">
          <h2 className="text-4xl tracking-tight text-[#132577] sm:text-2xl">
            TEAM
          </h2>
          <p className="mt-2 text-3xl font-bold leading-8 text-black-600">
            Our certified experts
          </p>
        </div>
        <div className="mt-12 p-1 rounded-xl ">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 h-4/5">
            {team.map((item, idx) => (
              <li
                key={idx}
                className="shadow-md w-full p-2 rounded-xl bg-[#ffc107]/80  hover:shadow-lg hover:shadow-[#132577]"
              >
                <div className="w-full h-60 sm:h-52 md:h-56">
                  <img
                    src={item.avatar}
                    className="w-full h-full object-cover object-center shadow-md rounded-xl"
                    alt=""
                  />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-lg text-gray-700 font-semibold">
                    {item.name}
                  </h4>
                  <p className="">{item.title}</p>
                  <div className="mt-3 flex gap-4 text-[#132577] justify-center pt-10 pb-5 border-10">
                    <a href={item.twitter} className="">
                      <img
                        src={twitterIcon}
                        className="w-50 h-50 hover:opacity-30 duration-150"
                        alt=""
                      />
                    </a>
                    <a href={item.facebook} className="">
                      <img
                        src={facebookIcon}
                        className="w-50 h-50 hover:opacity-30 duration-150"
                        alt=""
                      />
                    </a>
                    <a href={item.linkedin} className="">
                      <img
                        src={linkedinIcon}
                        className="w-50 h-50 hover:opacity-30 duration-150"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;
