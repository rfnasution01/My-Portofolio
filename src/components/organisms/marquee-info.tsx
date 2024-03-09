import { DataProject } from "../../const/data-project";
import { SectionProject } from "../atoms/SectionProject";

export function MarqueeInfo() {
  return (
    <div className="p-24 flex gap-x-24 overflow-auto scrollbar">
      <div className="whitespace-nowrap ">
        <div className="flex gap-x-32">
          {DataProject.map((item, idx) => (
            <div className="min-w-[54rem]" key={idx}>
              <SectionProject
                img={item?.img}
                title={item?.title}
                description={item?.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
