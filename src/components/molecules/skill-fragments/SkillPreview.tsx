import { DataSkill } from "../../../const/data-skill";
import { ProgressBar } from "../../atoms/ProgressBar";

export function SkillPreview() {
  return (
    <div className="grid grid-cols-12 gap-16">
      {DataSkill.map((item, idx) => (
        <div className="col-span-6 phones:col-span-12" key={idx}>
          <h5 className="font-roboto text-[2.7rem] text-primary-shade-2 font-medium mb-16">
            {item?.title}
          </h5>
          <div className="flex flex-col gap-y-16">
            {item?.data.map((items, idxs) => (
              <div key={idxs}>
                <ProgressBar title={items?.name} progress={items?.progress} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
