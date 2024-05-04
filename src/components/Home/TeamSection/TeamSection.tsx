import React from "react";
import { Container } from "../..";
import TeamMember from "./TeamMember";
import teamSection1 from "../../../../public/images/team-section/TeamSection1.png";
import teamSection2 from "../../../../public/images/team-section/TeamSection2.png";
import teamSection3 from "../../../../public/images/team-section/TeamSection3.png";

const TeamSection: React.FC = () => {
  const teamMembers = [
    { name: "Morgan Drew", role: "Manager", image: teamSection2 },
    { name: "Jeffery Walker", role: "Lead Designer", image: teamSection1 },
    { name: "Andrew Steve", role: "UI/UX Designer", image: teamSection3 },
  ];

  return (
    <Container style={`flex-col md:h-full xl:h-[750px]`}>
      <div className="lg:h-[80px] flex flex-col items-center">
        <div className="xl:text-[32px] text-[24px] leading-[32px] font-bold">
          The Core of Our Team
        </div>
        <div className="text-[16px] text-[#5F6D7E] text-center font-normal xl:w-[800px]  ">
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment of people and great talent that
          truly rocks.
        </div>
      </div>
      <div className="xl:hidden flex xl:flex-row flex-col xl:w-[1216px] xl:h-[182px] gap-[32px] md:grid md:grid-cols-2">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
      <div className="xl:flex xl:flex-row xl:w-[1216px] xl:h-[182px] gap-[32px] hidden xl:justify-self-center">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </Container>
  );
};

export default TeamSection;
