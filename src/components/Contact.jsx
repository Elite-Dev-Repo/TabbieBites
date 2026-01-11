import { MessageCircleCodeIcon, PhoneCall } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <footer className="bg-black h-[35vh] w-[100vw] text-[#fff7] overflow-hidden">
      <div className="cont flex items-start flex-col w-full h-full">
        <div className="flex flex-col  mt-9 h-full w-full justify-center gap-4">
          <p>oyenekandorcas@gmail.com</p>
          <p>+234 9167686804</p>
        </div>
        <div className="flex items-center h-full w-full my-9 items-end justify-center gap-9">
          <p>
            <a href="#">Back to top</a>
          </p>

          <p className="text-center flex items-center justify-center text-[#fff7]">
            © {new Date().getFullYear()} Elite Developer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
