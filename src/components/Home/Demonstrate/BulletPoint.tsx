import React from "react";
import checkIcon from "../../../assets/check.svg";
const BulletPoint = ({ text }: { text: string }) => {
  return (
    <>
      <div className="flex flex-row items-center gap-[8px]">
        <div>
          <img src={checkIcon} alt="" />
        </div>
        <div>{text}</div>
      </div>
    </>
  );
};

export default BulletPoint;
