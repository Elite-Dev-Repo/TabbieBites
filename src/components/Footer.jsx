import logo from "../assets/image27.png";

const columns = [
  {
    title: "Explore",
    links: [
      { name: "Our story", href: "/#about" },
      { name: "Our work", href: "/gallery" },
      { name: "Services", href: "/#services" },
    ],
  },
  {
    title: "Order",
    links: [
      { name: "Custom cakes", href: "/#services" },
      { name: "Menu & pricing", href: "/pricing" },
      { name: "Shop", href: "/shop" },
    ],
  },
  {
    title: "Say hello",
    links: [
      {
        name: "Instagram",
        href: "https://www.instagram.com/tabbie_bakes",
        icon: "hgi-instagram",
      },
      {
        name: "WhatsApp",
        href: "https://wa.me/message/JDAMXIQTPNBSO1",
        icon: "hgi-whatsapp",
      },
      {
        name: "Email",
        href: "mailto:dorcasoyenekan3@gmail.com",
        icon: "hgi-mail-01",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#211b1b] pt-[4.5rem] pb-6 text-primary">
      <div className="cont">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 pb-16 min-[760px]:grid-cols-[1.5fr_repeat(3,1fr)] min-[760px]:gap-12">
          <div className="col-span-2 min-[760px]:col-span-1">
            <a href="/" aria-label="Tabbie Bakes home">
              <img
                src={logo}
                alt="Tabbie Bakes"
                className="block max-h-[68px] w-[145px] object-contain object-left"
              />
            </a>
            <p className="mt-[1.4rem] text-[0.9rem] leading-[1.7] text-[#b7aeaa]">
              Made with care.
              <br />
              Shared with joy.
            </p>
          </div>

          {columns.map((column) => (
            <nav
              className="text-[#c8c0bd]"
              key={column.title}
              aria-label={column.title}
            >
              <h2 className="mb-[1.2rem] mt-[0.4rem] text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#e99bad]">
                {column.title}
              </h2>
              <ul className="m-0 grid list-none gap-[0.8rem] p-0">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-[0.86rem] text-[#c8c0bd] no-underline transition-colors hover:text-white"
                    >
                      {link.icon && (
                        <i
                          className={`hgi-stroke ${link.icon} inline-block text-base leading-none`}
                          aria-hidden="true"
                        />
                      )}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex justify-between gap-4 border-t border-[#ffffff1c] pt-[1.2rem] text-[0.7rem] uppercase tracking-[0.08em] text-[#8d8380]">
          <span>© {new Date().getFullYear()} Tabbie Bakes</span>
          <a
            href="/"
            className="text-[#c8c0bd] no-underline transition-colors hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
