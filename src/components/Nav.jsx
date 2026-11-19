import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Our Story", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Pricing", href: "/pricing" },
  ];

  const mobileLinks = [{ name: "Home", href: "/" }, ...navLinks];

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const goToShop = () => {
    navigate("/shop");
    closeMenu();
  };

  return (
    <>
      <nav className="sticky top-5 z-50 mx-auto flex h-18 w-[90%] items-center justify-between border border-tertiary/10 bg-primary/85 px-6 backdrop-blur-md transition-all duration-300 sm:w-[90%] lg:px-10">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <i
              className="hgi-stroke hgi-chef-hat inline-block text-2xl leading-none text-secondary"
              aria-hidden="true"
            />
            <span className="block text-xl font-bold tracking-tight text-gray-800">
              Tabbie<span className="text-secondary">Bakes</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex gap-8 font-medium text-gray-600">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm transition-colors duration-200 hover:text-secondary"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => navigate("/shop")}
            className="flex items-center gap-2 bg-secondary px-6 py-2.5 font-semibold text-white transition-all hover:bg-secondary-dark hover:shadow-lg active:scale-95"
          >
            <i
              className="hgi-stroke hgi-shopping-cart-01 inline-block text-[1.125rem] leading-none"
              aria-hidden="true"
            />
            <span>Shop</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="p-2 transition-colors hover:bg-gray-100 lg:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <i className="hgi-stroke hgi-menu-01 inline-block text-[1.75rem] leading-none" aria-hidden="true" />
        </button>
      </nav>

      {/* Full-screen mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-100 flex flex-col bg-primary px-7 pt-8 pb-10 text-tertiary transition-opacity duration-500 lg:hidden ${
          isMenuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
            <i
              className="hgi-stroke hgi-chef-hat inline-block text-2xl leading-none text-secondary"
              aria-hidden="true"
            />
            <span className="text-xl font-bold tracking-tight text-gray-800">
              Tabbie<span className="text-secondary">Bakes</span>
            </span>
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="p-2 transition-colors hover:bg-tertiary/5"
          >
            <i
              className="hgi-stroke hgi-cancel-01 inline-block text-[1.75rem] leading-none"
              aria-hidden="true"
            />
          </button>
        </div>

        <ul className="mt-14 flex flex-1 flex-col justify-center">
          {mobileLinks.map((link, index) => (
            <li key={link.name} className="border-b border-tertiary/10">
              <a
                href={link.href}
                onClick={closeMenu}
                className="group flex items-baseline justify-between py-5"
              >
                <span className="text-[clamp(2.4rem,11vw,3.5rem)] leading-none font-light tracking-tight transition-colors group-hover:text-secondary">
                  {link.name}
                </span>
                <span className="font-mono text-[11px] text-tertiary/40">
                  0{index + 1}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={goToShop}
          className="mt-10 flex w-full items-center justify-center gap-3 rounded-full bg-secondary px-6 py-5 text-lg font-light tracking-wide text-primary transition-colors hover:bg-secondary-dark"
        >
          <i
            className="hgi-stroke hgi-shopping-cart-01 inline-block text-xl leading-none"
            aria-hidden="true"
          />
          Shop
        </button>
      </div>
    </>
  );
};

export default Nav;
