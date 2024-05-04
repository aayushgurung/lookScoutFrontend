import socialMedia from "../../../assets/socialmedia.svg";

type TeamMemberProps = {
  name: string;
  role: string;
  image: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => {
  return (
    <>
      <div className="xl:w-[384px] xl:gap-[16px] flex flex-col ">
        <div>
          <img src={image} alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-[12px]">
          <div>
            <div className="font-semibold text-[22px]">{name}</div>
            <div className="text-justify text-[#5F6D7E]">{role}</div>
          </div>
          <div>
            <div className="text-justify text-[#5F6D7E]">
              <img src={socialMedia} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
