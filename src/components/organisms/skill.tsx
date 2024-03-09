import { useState } from "react";
import { SectionHeader } from "../atoms/SectionHeader";
import { ExperiencePreview, SkillPreview } from "../molecules/skill-fragments";

export function Skill() {
  const [state, setState] = useState<number>(0);

  return (
    <div className="flex flex-col gap-y-24">
      <SectionHeader
        title="Skills & Experience"
        section="skill"
        state={state}
        setState={setState}
      />
      <div className="flex gap-x-32">
        <div className="flex-1">
          <SkillPreview />
        </div>
        <div className="flex-1">
          <ExperiencePreview state={state} />
        </div>
      </div>
    </div>
  );
}
