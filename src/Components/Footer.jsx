// Source: https://www.floatui.com/components/footers

const Footer = () => {
  const footerNavs = [
    {
      href: "javascript:void()",
      name: "Terms",
    },
    {
      href: "javascript:void()",
      name: "License",
    },
    {
      href: "javascript:void()",
      name: "Privacy",
    },
    {
      href: "javascript:void()",
      name: "About us",
    },
  ];
  return (
    <footer className="w-full pt-10">
      <div className="mx-auto max-w-screen-xl px-4 text-gray-600 md:px-8">
        <div className="justify-between sm:flex">
          <div className="space-y-6">
            <img src="https://www.floatui.com/logo.svg" className="w-32" />
            <p className="max-w-md">
              Nulla auctor metus vitae lectus iaculis, vel euismod massa
              efficitur.
            </p>
            <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
              {footerNavs.map((item, idx) => (
                <li className="text-gray-800 duration-150 hover:text-gray-500">
                  <a key={idx} href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <p className="font-semibold text-gray-700">Developed by</p>
            <div className="mt-3 flex items-center gap-3 sm:block">
              <a href="https://www.jpdiaz.dev/">Juan Diaz</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t py-10 md:text-center">
          <p>© 2022 Float UI Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
