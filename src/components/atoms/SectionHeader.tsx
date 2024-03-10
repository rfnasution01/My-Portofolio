import { ArrowDownToDot, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Button } from "./Button";

export function SectionHeader({
  title,
  section,
  state,
  setState,
}: {
  title?: string;
  section?: "skill" | "capability" | "project" | "contract";
  state?: number;
  setState?: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="flex items-center gap-32">
      <h5 className="flex-1 font-sf-pro font-bold text-[5rem] text-primary">
        {title}
      </h5>
      {section?.includes("skill") && (
        <div className="flex-1">
          <div className="flex flex-row gap-x-16 border-2 border-primary rounded-lg hover:cursor-pointer">
            {["Experience", "Education"].map((item, idx) => (
              <div
                className={`px-32 py-16 w-1/2 rounded-lg ${
                  state === idx
                    ? "bg-primary text-white"
                    : "bg-transparent text-primary"
                } flex items-center justify-center gap-x-16`}
                key={idx}
                onClick={setState ? () => setState(idx) : () => {}}
              >
                <span>
                  {idx === 0 ? <BriefcaseBusiness /> : <GraduationCap />}
                </span>
                <span className="font-roboto text-[2rem]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {section?.includes("capability") && (
        <a href="#" className="animate-bounce">
          <Button variant="solid">
            <div className="flex flex-row gap-x-16">
              <span>
                <ArrowDownToDot size={20} />
              </span>
              <span className="font-roboto text-[2rem]">Hire Me</span>
            </div>
          </Button>
        </a>
      )}
    </div>
  );
}
