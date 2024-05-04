import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="xl:pt-[64px] xl:h-[492px] xl:pb-[64px] xl:gap-[64px] h-[376px] py-[32px] px-[16px] gap-[32px] w-full flex md:h-[352px]
       mx-auto bg-[#F8F9FB] items-center justify-center"
      >
        <div className="flex gap-[16px] flex-col text-center">
          <div className="font-semibold text-[14px] text-[#437EF7] leading-[20px]">
            1% OF THE INDUSTRY
          </div>
          <div className="flex flex-col md:gap-[24px] gap-[16px] ">
            <div className="md:text-[52px] text-[36px] md:leading-[60px] leading-[44px] md:font-bold font-semibold text-custom-black ">
              Hype got you here. <br /> Stay for the support.
            </div>
            <div className="text-[18px] leading-[26px] font-normal text-custom-grey text-center ">
              We've been told it is possible to revolutionize the payment
              industry. We <br /> have not reinvented the wheel, we decided to
              build upon it - successfully.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
