const posts = [
  {
    id: 1,
    title: "Software Development",
    href: "https://litslink.com/",
    description:
      "From web applications to mobile apps, our team of experienced developers can bring your ideas to life. We specialize in creating custom software solutions tailored to your specific needs, using the latest technologies and best practices. Let us help you build the software that will take your business to the next level.",
    buttonLM: { title: "Learn More >", href: "https://litslink.com/" },
  },
  // More posts...
  {
    id: 2,
    title: "AI Programmer & Technical",
    href: "https://litslink.com/services/artificial-intelligence",
    description:
      "Our team of AI programmers and technical experts are dedicated to creating cutting-edge solutions that leverage the latest advancements in artificial intelligence. From natural language processing to computer vision, we have the expertise to help you build intelligent systems that can learn, reason, and adapt. Let us help you harness the power of AI to transform your business.",
    buttonLM: {
      title: "Learn More >",
      href: "https://litslink.com/services/artificial-intelligence",
    },
  },
  {
    id: 1,
    title: "System Application Development",
    href: "https://litslink.com/services/web-development",
    description:
      "Whether you need a custom enterprise solution or a specialized system for your business, our team of expert developers can help. We specialize in system application development, using the latest technologies and best practices to create powerful, scalable, and secure systems that meet your unique needs. Let us help you build the system that will take your business to the next level.",
    buttonLM: {
      title: "Learn More >",
      href: "https://litslink.com/services/web-development",
    },
  },
];

export default function Example() {
  return (
    <div name="services" className="pb-6 pt-24 sm:pb-6 md:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto text-center lg:mx-0">
          <h2 className="text-4xl tracking-tight text-[#132577] sm:text-2xl">
            SERVICES
          </h2>
          <p className="text-black-600 mt-2 text-3xl font-bold leading-8">
            We Provide All-In-One Solution
          </p>
          <p className="text-black-600 text-3xl font-bold leading-8">
            For Every IT Job
          </p>
        </div>
        <div className="max-w-8xl mx-auto mt-4 grid grid-cols-1 gap-4 border-gray-200 pt-5 md:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="box-border flex max-w-4xl border-spacing-x-28 flex-col items-start justify-between rounded-lg bg-[#ffc107] p-4 shadow-xl hover:bg-[#ffbd07] hover:shadow-2xl md:p-6 lg:p-8"
            >
              <div className="group relative p-2">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mb-5 mt-5 line-clamp-3 text-sm leading-6">
                  {post.description}
                </p>
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <a
                  href={post.buttonLM.href}
                  className="relative z-10 rounded-full px-3 py-1.5 font-medium text-gray-600 underline underline-offset-2 hover:text-gray-500 active:text-[#132577] "
                >
                  {post.buttonLM.title}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
