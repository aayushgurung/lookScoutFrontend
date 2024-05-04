import React from "react";

type buttonProps = {
  children: React.ReactNode;
  variant: string;
};

const Button: React.FC<buttonProps> = ({ children, variant }) => {
  const style =
    variant === "white"
      ? "text-[#437EF7] bg-white text-[15px] drop-shadow-md rounded-md leading-[22px] "
      : variant === "blue"
      ? "text-white bg-[#437EF7] drop-shadow-md rounded-md leading-[22px]"
      : "text-[#437EF7] ";
  return (
    <>
      <button
        className={`h-[46px] ${style} py-[12px] px-[18px] ` + "font-semibold"}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
