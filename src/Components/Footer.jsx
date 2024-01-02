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
      className="mx-auto w-full max-w-full bg-[#132577] px-0 py-5 text-white md:px-12 lg:px-0"
    >
      <div className="justify-between gap-6 md:flex">
        <div className="flex-none md:flex-1">
          <div className="md:max-w-xs">
            <p className="text-md mt-2 md:pt-20 md:text-lg">
              Digital experience is always embedded in a physical experience.
            </p>
          </div>
        </div>
        <div className="flex justify-between md:flex-1">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-2 md:space-y-4" key={idx}>
              <h4 className="text-lg font-bold text-[#92989F] md:text-xl">
                {item.label}
              </h4>
              {item.items.map((footerElement, idx) => (
                <li key={idx}>
                  <a
                    href={footerElement.href}
                    className="hover:text-[#ffc107] hover:underline"
                  >
                    {footerElement.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between py-2 text-xs text-gray-500">
        <div className="mt-4 sm:mt-0">
          &copy; Design with love © Juan Diaz 2023. All right reserved
        </div>
        <div className="mt-4 sm:mt-0">Claim Privacy Terms</div>
      </div>
    </footer>
  );
};

export default Footer;
