import React from "react";
import Container from "../../Container";
import buttonArrow from "../../../assets/button Arrow.svg";
import Button from "../../Button";
import BulletPoint from "./BulletPoint";
import RightImage from "../../../assets/demonstrate1.png";
import MiddleImage from "../../../assets/demonstrate2.png";

const Demonstrate = () => {
  return (
    <>
      <Container style={`md:h-full`}>
        {" "}
        <div className="flex xl:flex-row flex-col gap-[64px] lg:h-[677px] md:h-full md:gap-[32px] xl:gap-[40px] xl:h-[560px] justify-between">
          <div className=" flex flex-col xl:w-[532px] xl:gap-[24px] gap-[24px] justify-center">
            <div className=" flex flex-col items-center">
              <div className="xl:text-[32px] text-[28px] leading-[36px] font-semibold xl:leading-[42px] text-[#272D37]">
                Demonstrate branding consequently think outside
              </div>
              <div className="font-normal text-[16px] leading-[24px] text-[#5F6D7E] hidden xl:block">
                Velit purus egestas tellus phasellus. Mattis eget sed faucibus
                magna vulputate pellentesque a diam tincidunt. Aenean malesuada
                tellus <br /> tellus faucibus mauris quisque mauris in.
              </div>
            </div>
            <div className="flex flex-col gap-[10px] text-custom-grey">
              <BulletPoint text="Enterprise-grade security" />
              <BulletPoint text="99.9% guaranteed uptime SLA" />
              <BulletPoint text="Designated customer success team" />
            </div>
            <div className="">
              <Button variant="blue">
                <div className="flex flex-row gap-[10px] items-center">
                  <div>Start Now</div>{" "}
                  <div className="">
                    <img src={buttonArrow} alt="" />
                  </div>
                </div>
              </Button>
            </div>
          </div>
          <div className="border flex flex-row items-center justify-center xl:h-[560px] xl:w-[560px] sm:w-full sm:h-full w-[343px] h-[343px] relative">
            <img src={RightImage} alt="" className="object-cover " />
            <div className="absolute ">
              <img src={MiddleImage} alt="" className="" />
            </div>
          </div>
        </div>{" "}
      </Container>
    </>
  );
};

export default Demonstrate;
