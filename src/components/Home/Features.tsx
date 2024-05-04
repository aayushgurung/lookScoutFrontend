import { Container } from "../../components";
import featureIcon from "../../assets/features/feature1.svg";
import arrowBlue from "../../assets/arrowblue.svg";

const Features = () => {
  return (
    <>
      <Container style={`flex-col md:h-full`}>
        <div className=" xl:h-[80px] flex flex-col items-center">
          <div className="xl:text-[32px] text-[24px] leading-[32px] text-custom-black font-bold">
            Messaging for all
          </div>
          <div className="text-[16px] text-[#5F6D7E] hidden xl:block">
            User generated content in real-time will have multiple touchpoints
            for offshoring.
          </div>
        </div>
        <div className="xl:block md:flex md:flex-row justify-between ">
          <div className="flex xl:flex-row flex-col xl:w-[1216px] xl:h-[182px] md:gap-[48px] xl:gap-[32px] gap-[40px] md:w-[336px]">
            <div className="xl:w-[384px] gap-[20px] flex flex-col">
              <div>
                <img src={featureIcon} alt="" />
              </div>
              <div className="flex flex-col gap-[12px]">
                <div className="font-semibold text-[22px]">
                  Easier Work Organization
                </div>
                <div className="text-justify text-[#5F6D7E]">
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly timely deliverables for real-time
                  schemas.{" "}
                </div>
              </div>
            </div>
            <div className="xl:w-[384px] gap-[20px] flex flex-col">
              <div>
                <img src={featureIcon} alt="" />
              </div>
              <div className="flex flex-col gap-[12px]">
                <div className="font-semibold text-[22px] ">
                  Easier Work Organization
                </div>
                <div className="text-justify text-[#5F6D7E]">
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly timely deliverables for real-time
                  schemas.{" "}
                </div>
              </div>
            </div>
            <div className="xl:w-[384px] gap-[20px] flex flex-col">
              <div>
                <img src={featureIcon} alt="" />
              </div>
              <div className="flex flex-col gap-[12px]">
                <div className="font-semibold text-[22px]">
                  Easier Work Organization
                </div>
                <div className="text-justify text-[#5F6D7E]">
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly timely deliverables for real-time
                  schemas.{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex xl:flex-row flex-col xl:w-[1216px] xl:h-[182px] md:gap-[48px] xl:gap-[32px] gap-[40px] xl:hidden md:w-[336px] md:h-[642px] mt-10 md:mt-0">
            <div className="xl:w-[384px] gap-[20px] flex flex-col">
              <div>
                <div>
                  <img src={featureIcon} alt="" />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <div className="font-semibold text-[22px]">
                    Easier Work OrganizationOKKJ
                  </div>
                  <div className="text-justify text-[#5F6D7E]">
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly timely deliverables for real-time
                    schemas.{" "}
                  </div>
                </div>
              </div>
              <div className="font-semibold text-[15px] leading-[22px] text-[#437EF7] flex flex-row gap-[5px]  items-center ">
                Learn more <img src={arrowBlue} alt="" />
              </div>
            </div>
            <div className="xl:w-[384px] gap-[20px] flex flex-col">
              <div>
                <div>
                  <img src={featureIcon} alt="" />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <div className="font-semibold text-[22px]">
                    Easier Work OrganizationOKKJ
                  </div>
                  <div className="text-justify text-[#5F6D7E]">
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly timely deliverables for real-time
                    schemas.{" "}
                  </div>
                </div>
              </div>
              <div className="font-semibold text-[15px] leading-[22px] text-[#437EF7] flex flex-row gap-[5px]  items-center ">
                Learn more <img src={arrowBlue} alt="" />
              </div>
            </div>
            <div className="xl:w-[384px] gap-[20px] flex flex-col">
              <div>
                <div>
                  <img src={featureIcon} alt="" />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <div className="font-semibold text-[22px]">
                    Easier Work OrganizationOKKJ
                  </div>
                  <div className="text-justify text-[#5F6D7E]">
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly timely deliverables for real-time
                    schemas.{" "}
                  </div>
                </div>
              </div>
              <div className="font-semibold text-[15px] leading-[22px] text-[#437EF7] flex flex-row gap-[5px]  items-center ">
                Learn more <img src={arrowBlue} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Features;
