import { DataEducation } from "../../../const/data-education";
import { DataExperience } from "../../../const/data-experience";
import { SectionContent } from "../../atoms/SectionContent";
import { CardHelper } from "../card-helper";

export function ExperiencePreview({ state }: { state: number }) {
  return (
    <>
      {state === 0 && (
        <div className="grid grid-cols-12 gap-24">
          {DataExperience?.map((item, idx) => (
            <div className="col-span-6 phones:col-span-12" key={idx}>
              <CardHelper>
                <SectionContent
                  title={item?.position}
                  subTitle={item?.company}
                  description={item?.years}
                  link={item?.link}
                  idx={idx}
                />
              </CardHelper>
            </div>
          ))}
        </div>
      )}
      {state === 1 && (
        <div className="grid grid-cols-12 gap-24">
          {DataEducation?.map((item, idx) => (
            <div className="col-span-6 h-full phones:col-span-12" key={idx}>
              <CardHelper>
                <SectionContent
                  title={item?.school}
                  subTitle={`${item?.study} ${
                    item?.ipk ? `- ${item?.ipk}` : ""
                  }`}
                  description={item?.years}
                  idx={idx}
                />
              </CardHelper>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
