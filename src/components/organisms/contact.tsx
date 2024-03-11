import { DataContact } from "../../const/data-contact";
import { Card } from "../atoms/Card";
import { SectionContent } from "../atoms/SectionContent";
import { SectionHeader } from "../atoms/SectionHeader";

export function Contact() {
  return (
    <div className="flex flex-col gap-y-24">
      <SectionHeader title="Contact" section="contact" />
      <div className="grid grid-cols-12 gap-x-24">
        <div className="col-span-6">
          <Card variant="outlined" color="primary" radius="2xl">
            {DataContact.map((item, idx) => (
              <div className="" key={idx}>
                <SectionContent
                  title={item?.title}
                  subTitle={item?.desc}
                  img={item?.img}
                />
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
