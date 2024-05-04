import React from "react";
import labelNew from "../../../assets/labelNew.svg";
import arrow from "../../../assets/arrow.svg";

type FAQItemProps = {
  title: string;
  description: string;
  info: string;
  isNew: boolean;
};

const FAQItem: React.FC<FAQItemProps> = ({
  title,
  description,
  info,
  isNew,
}) => (
  <div className="py-[16px] px-[32px] flex flex-row h-[80px] border items-center">
    <div className="flex flex-col xl:w-[974px] w-[343px] md:w-[704px]">
      <div className="text-[18px] font-semibold leading-[28px]">{title}</div>
      <div className="xl:block hidden text-[16px] font-normal leading-[24px] text-custom-grey">
        {description}
      </div>
    </div>
    <div className="xl:flex flex-col xl:w-[174px] text-[16px] font-medium text-custom-grey hidden">
      {info}
    </div>
    <div className="flex flex-col">
      {isNew ? (
        <img src={labelNew} alt="New Label" />
      ) : (
        <img src={arrow} alt="Arrow" />
      )}
    </div>
  </div>
);

export default FAQItem;
