export function SectionContent({
  title,
  subTitle,
  description,
  link,
  idx,
}: {
  title?: string;
  subTitle?: string;
  description?: string;
  link?: string;
  idx: number;
}) {
  return (
    <a
      href={link}
      target={link?.includes("#") ? "_top" : "_blank"}
      className="shadow p-24 h-full items-center flex gap-x-24 hover:cursor-pointer hover:text-white text-primary hover:bg-primary rounded-lg"
    >
      <h5 className="font-roboto text-[3rem] font-bold mb-8">{idx + 1}</h5>

      <div className="flex-col flex flex-1 gap-y-8">
        <h5 className="font-roboto text-[3rem] font-bold mb-8">{title}</h5>
        <h6 className="font-roboto text-[1.6rem] font-extralight">
          {subTitle}
        </h6>
        <h6 className="font-roboto text-[1.6rem] font-extralight">
          {description}
        </h6>
      </div>
    </a>
  );
}
