import React, { useEffect, useState } from "react";
import { Container, Content } from "..";
import lookScoutLogo from "../../assets/Lookscoutlogo.svg";
import facebook from "../../assets/footer/facebook.svg";
import instagram from "../../assets/footer/instagram.svg";
import google from "../../assets/footer/google.svg";
import apple from "../../assets/footer/apple.svg";
import footerlogo from "../../assets/footer/footerlogo.svg";
import LinkContainer from "./LinkContainer";
import { footerLinksData } from "../../data/data";

function Footer() {
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Container style={`h-[496px] xl:h-[350px] flex-col`}>
        <Content style={`xl:gap-[12px] h-[216px] `}>
          <div className=" h-[80px] flex xl:flex-row flex-col justify-between justify-center gap-[16px] ">
            <div className=" flex flex-col gap-[16px]">
              <div>
                <img src={lookScoutLogo} alt="" />
              </div>
              <div className="flex flex-col gap-[16px] xl:w-[247px]">
                <div>
                  Generate outside the box thinking with the possibility to
                  targtet the low.
                </div>
                <div className="flex flex-row gap-[24px]">
                  <img src={facebook} alt="" />
                  <img src={google} alt="" />
                  <img src={apple} alt="" />
                  <img src={instagram} alt="" />
                </div>
              </div>
            </div>

            {isMdScreen &&
              footerLinksData.map((link, index) => (
                <LinkContainer
                  key={index}
                  title={link.title}
                  items={link.items}
                />
              ))}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:hidden">
              {footerLinksData.map((link, index) => (
                <LinkContainer
                  key={index}
                  title={link.title}
                  items={link.items}
                />
              ))}
            </div>
          </div>
        </Content>{" "}
      </Container>
      <div className="flex flex-col items-center mt-8 mb-8 xl:mt-0">
        <div>
          <img src={footerlogo} alt="" />
        </div>
        <div className="text-custom-grey">
          © 2023 Lookscout. All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
