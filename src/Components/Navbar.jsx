import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Link } from "react-scroll";
import { useScrollPosition } from "../Hooks";

const navigation = [
  { name: "Home", section: "home" },
  { name: "Services", section: "services" },
  { name: "About", section: "about" },
  { name: "Testimonials", section: "testimonials" },
  // { name: "Contact", section: "footer" },
];
function classNamesNavBarScroll(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  return (
    <>
      {/* Tutorial To Change NavBar On Scroll https://www.youtube.com/watch?v=UvWMlNZuQTc&t=237s */}
      <header
        className={classNamesNavBarScroll(
          scrollPosition > 0
            ? "md:h-auto md:-translate-y-6 md:bg-[#95D4EB] md:shadow"
            : "md:h-none md:translate-y-0 md:bg-none md:shadow-none",
          "md:transition-shadow-xl md:transition-color absolute inset-x-0 top-0 z-40 duration-500 md:fixed md:h-20 md:-translate-y-6 md:shadow-black lg:h-24",
        )}
      >
        <nav
          className="flex items-center justify-end p-12 md:px-10 lg:px-20"
          aria-label="Global"
        >
          <div className="hidden md:flex md:justify-end md:gap-x-8 lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                to={item.section}
                smooth={true}
                key={item.name}
                duration={500}
                className="cursor-pointer text-sm font-semibold leading-6 text-white hover:text-gray-400 hover:underline"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blue-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      to={item.section}
                      smooth={true}
                      key={item.name}
                      duration={500}
                      className="-mx-3 block cursor-pointer rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-zinc-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
