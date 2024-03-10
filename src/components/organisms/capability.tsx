import { DataCapability } from "../../const/data-capability";
import { SectionContent } from "../atoms/SectionContent";
import { SectionHeader } from "../atoms/SectionHeader";
import { CardHelper } from "../molecules/card-helper";

export function Capability() {
  return (
    <div className="flex flex-col gap-y-24">
      <SectionHeader title="My Services" section="capability" />
      <div className="grid grid-cols-12 gap-24">
        {DataCapability.map((item, idx) => (
          <div className="col-span-4" key={idx}>
            <CardHelper>
              <SectionContent
                title={item?.title}
                subTitle={item?.desc}
                img={item?.img}
              />
            </CardHelper>
          </div>
        ))}
      </div>
    </div>
  );
}
