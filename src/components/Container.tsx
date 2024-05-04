import React from "react";

type containerProps = {
  children: React.ReactNode;
  style: string;
};

const Container: React.FC<containerProps> = ({ children, style }) => {
  return (
    <>
      <div
        className={`xl:pt-[64px] xl:pb-[64px] ${style} 
        xl:gap-[64px] flex py-[32px] px-[16px] gap-[32px] 
        md:py-[40px] md:px-[32px] md:gap-[40px] `}
      >
        {children}
      </div>
    </>
  );
};

export default Container;
