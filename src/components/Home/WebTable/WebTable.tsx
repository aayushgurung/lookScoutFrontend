import { Container } from "../..";
import { faqs } from "../../../data/data";
import FAQItem from "./Faq";

const WebTable = () => {
  return (
    <>
      <Container style={`xl:h-[788px]  md:h-[708px] flex-col`}>
        <div className=" xl:h-[80px] flex flex-col items-center">
          <div className="xl:text-[32px] text-[24px] font-bold">
            Frequently asked questions
          </div>
          <div className="text-[16px] text-[#5F6D7E] text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the <br /> industry's standard dummy
            text ever since the 1500s,
          </div>
        </div>

        <div className="flex flex-col xl:w-[1216px]  ">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default WebTable;
