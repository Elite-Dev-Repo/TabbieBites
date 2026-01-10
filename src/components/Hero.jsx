import logo from "../assets/logo.png";
import hero1 from "../assets/hero1.png";

function Hero() {
  return (
    <section>
      <div className="">
        <nav className="cont w-full h-[80px] flex items-center justify-around bg-transparent backdrop-blur-sm">
          <a href="/" className="w-[150px]">
            <img src={logo} alt="" />
          </a>

          <ul className="flex gap-5">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <button className="px-5 py-3 border ">
            <a href="#contact">Order on WhatsApp </a>
          </button>
        </nav>

        <header>
          <div className="cont flex  h-[calc(100vh-80px)] relative items-center justify-center">
            <div className=" flex-1 min-w-[0] h-full flex flex-col justify-center items-center">
              <h1 className="text-[5em] font-[400] absolute left-1/2 -translate-x-1/2 top-5 ">
                Crafted to Delight, <br /> Served with Love.
              </h1>
              {/* <p>
                Tabbie Bakes is a family-run business that specializes in baking
                fresh, delicious, and healthy cakes and pastries. We use only
                the finest ingredients and traditional baking techniques to
                create our signature products, which are available in a variety
                of flavors and styles. Whether you're looking for a special
                treat for yourself or a gift for someone you love, Tabbie Bakes
                has something for everyone.
              </p> */}

              <div className=" absolute bottom-[5em] left-[3em] max-w-[40%] flex flex-col items-start text-start gap-5">
                <p className="text-[.9em] uppercase font-semibold">
                  from fresh ingredients to sensational treats. <br /> We make
                  every effort to ensure that our products are of the highest
                  quality.
                </p>

                <button className="px-5 py-3 border w-fit bg-black text-white">
                  <a href="#contact">Order on WhatsApp</a>
                </button>
              </div>
            </div>

            <div className="flex-1 min-w-[0] flex flex-col h-full">
              <div className="mt-auto max-w-[100%]">
                <img src={hero1} alt="" />
              </div>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}

export default Hero;
