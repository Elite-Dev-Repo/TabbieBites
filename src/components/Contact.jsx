import { MessageCircleCodeIcon, PhoneCall } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <footer className="bg-black min-h-[35vh] w-full text-[#fff7] overflow-hidden">
      <div className="cont flex flex-col w-full h-full px-4 sm:px-5">
        <div className="flex flex-col mt-6 sm:mt-9 h-full w-full justify-center gap-3 sm:gap-4 py-8">
          <p className="text-sm sm:text-base break-all flex items-center gap-2">
            <MessageCircleCodeIcon className="text-white" />{" "}
            oyenekandorcas@gmail.com
          </p>
          <p className="text-sm sm:text-base flex items-center gap-2">
            <PhoneCall className="text-white" /> +2348078391732
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center h-full w-full my-6 sm:my-9 justify-center gap-4 sm:gap-9 pb-6">
          <p className="text-sm sm:text-base">
            <a href="#">Back to top</a>
          </p>

          <p className="text-center flex items-center justify-center text-[#fff7] text-xs sm:text-base">
            © {new Date().getFullYear()} Elite Developer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
