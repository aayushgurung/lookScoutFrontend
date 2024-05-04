import React from "react";
import Button from "../Button";

const CallToAction = () => {
  return (
    <>
      <div className=" py-[32px] px-[16px] xl:pt-[64px] xl:h-[318px] xl:pb-[64px] xl:gap-[64px]  mx-auto bg-[#2B63D9] items-center justify-center">
        <div className="flex gap-[8px] flex-col text-center">
          <div className="font-semibold text-[14px] text-[#FFFFFF] leading-[20px]">
            1% OF THE INDUSTRY
          </div>
          <div className="flex flex-col gap-[32px]">
            <div className="text-[32px] leading-[42px] font-semibold text-[#FFFFFF] ">
              Welcome to your new digital reality that <br /> which will rock
              your world truly at all.
            </div>
            <div className="flex gap-[16px] md:flex-row flex-col justify-center font-normal text-[#FFFFFF] ">
              <Button variant="white">Sign Up</Button>
              <Button variant="blue">Log In</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
