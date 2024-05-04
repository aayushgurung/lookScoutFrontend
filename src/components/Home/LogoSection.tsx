import React from "react";
import logo1 from "../../assets/1logo.svg";
import logo2 from "../../assets/2logo.svg";
import logo3 from "../../assets/3logo.svg";
import logo4 from "../../assets/4logo.svg";
import logo5 from "../../assets/5logo.svg";
import logo6 from "../../assets/mailchimp.svg";

function LogoSection() {
  return (
    <>
      {" "}
      <div className="py-[32px] px-[16px] md:h-full xl:pt-[64px] xl:h-[160px] h-[416px] xl:pb-[64px] xl:gap-[64px] xl:w-full flex bg-[#2B63D9] items-center justify-center">
        <div className="hidden gap-[32px] xl:gap-[64px] xl:flex-row flex-col text-center md:grid md:grid-cols-4 xl:hidden">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img
            src={logo5}
            alt=""
            className="md:relative md:left-40 xl:left-0 xl:hidden"
          />
          <img
            src={logo6}
            alt=""
            className="md:relative md:left-40 xl:left-0 xl:hidden"
          />
          <img src={logo5} alt="" className="hidden xl:block" />
          <img src={logo6} alt="" className="hidden xl:block" />
        </div>
        <div className="gap-[32px] xl:gap-[64px] xl:flex-row flex-col text-center flex md:hidden xl:flex">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
        </div>
      </div>
    </>
  );
}

export default LogoSection;
