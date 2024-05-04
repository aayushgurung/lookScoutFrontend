import React from "react";
import { Link } from "react-router-dom";

type LinkProps = {
  title: string;
  items: { name: string; path: string }[];
};

const LinkContainer: React.FC<LinkProps> = ({ title, items }) => {
  return (
    <>
      <div className="flex flex-col gap-[24px] ">
        <div className="text-[16px] font-semibold leading-[24px] text-[#272D37]">
          {title}
        </div>
        <div className="flex flex-col text-[#5F6D7E]">
          {items.map((item, index) => (
            <Link key={index} to={item.path}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default LinkContainer;
