// Source: https://www.floatui.com/components/footers

const Footer = () => {
  const footerNavs = [
    {
      label: "Services",
      items: [
        {
          href: "https://www.hostinger.com/web-hosting",
          name: "Web Hosting",
        },
        {
          href: "https://porkbun.com/products/domains",
          name: "Domains",
        },
        {
          href: "https://www.infinityfree.com/premium/",
          name: "Premium Hosting",
        },
        {
          href: "https://www.hostinger.com/vps-hosting",
          name: "Private Server",
        },
        {
          href: "https://www.hostinger.com/business-email",
          name: "E-mail Hosting",
        },
      ],
    },
    {
      label: "Follow Us",
      items: [
        {
          href: "https://facebook.com/1diazdev",
          name: "Facebook",
        },
        {
          href: "https://twitter.com/1diazdev",
          name: "Twitter",
        },
        {
          href: "https://instagram.com/1diazdev",
          name: "Instagram",
        },
        {
          href: "https://www.linkedin.com/in/1diazdev/",
          name: "LinkedIn",
        },
      ],
    },
    {
      label: "Contact Us",
      items: [
        {
          href: "mailto:jpdiaz@gmx.com?subject = From%your%Landing%Page%with%React&body = Hello%Juan",
          name: "jpdiaz@gmx.com",
        },
      ],
    },
  ];

  return (
    <footer
      name="footer"
      className="text-white bg-[#132577] px-0 py-5 max-w-full mx-auto w-full md:px-12 lg:px-0"
    >
      <div className="gap-6 md:flex justify-between">
        <div className="flex-none md:flex-1">
          <div className="md:max-w-xs">
            <p className="mt-2 text-md md:text-lg md:pt-20">
              Digital experience is always embedded in a physical experience.
            </p>
          </div>
        </div>
        <div className="flex md:flex-1 justify-between">
          {footerNavs.map((item, idx) => (
            <ul className="md:space-y-4 space-y-2" key={idx}>
              <h4 className="text-[#92989F] font-bold text-lg md:text-xl">
                {item.label}
              </h4>
              {item.items.map((footerElement, idx) => (
                <li key={idx}>
                  <a
                    href={footerElement.href}
                    className="hover:underline hover:text-[#ffc107]"
                  >
                    {footerElement.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-4 py-2 flex justify-between items-center text-gray-500 text-xs">
        <div className="mt-4 sm:mt-0">
          &copy; Design with love © Juan Diaz 2023. All right reserved
        </div>
        <div className="mt-4 sm:mt-0">Claim Privacy Terms</div>
      </div>
    </footer>
  );
};

export default Footer;
