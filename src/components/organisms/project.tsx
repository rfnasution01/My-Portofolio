import { Link } from "lucide-react";
import { DataWork } from "../../const/data-work";
import { Button } from "../atoms/Button";
import { SectionHeader } from "../atoms/SectionHeader";

export function Project() {
  return (
    <div className="flex flex-col gap-y-24">
      <SectionHeader title="My Project" section="project" />
      <div className="flex flex-col gap-y-16">
        {DataWork.map((item, idx) => (
          <div
            className={`flex ${
              idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } phones:flex-col gap-x-48 gap-y-16`}
            key={idx}
          >
            <div className="flex-1">
              <img src={item?.picture} alt={item?.name} className="p-16" />
            </div>
            <div className="flex-1 flex items-center justify-center flex-col gap-y-24">
              <h5 className="font-sf-pro text-[6rem] font-bold text-primary text-center">
                {item?.name}
              </h5>
              <h5 className="font-roboto text-[3rem] font-extralight text-primary-shade-2 text-center">
                {item?.desc}
              </h5>
              <div className="flex flex-wrap items-center justify-center gap-16">
                {item.skill?.map((skill, idx) => (
                  <div
                    className="flex items-center bg-primary-tint-1 p-8 rounded-lg text-primary gap-x-8"
                    key={idx}
                  >
                    <h5 className="font-roboto font-light text-[1.6rem] text-center">
                      {skill.name}
                    </h5>

                    <img
                      src={skill.logo}
                      alt={skill.name}
                      width={20}
                      height={20}
                    />
                  </div>
                ))}
              </div>
              <Button variant="solid">
                <div className="flex flex-row items-center gap-16">
                  <span>
                    <Link size={20} />
                  </span>
                  <h5 className="font-roboto text-[2rem] font-light text-white">
                    Visit Website
                  </h5>
                </div>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
