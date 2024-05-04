import React from "react";

type contentProps = {
  children: React.ReactNode;
  style: string;
};

const Content: React.FC<contentProps> = ({ children, style }) => {
  return (
    <>
      <div className={`${style} `}>{children}</div>
    </>
  );
};

export default Content;
