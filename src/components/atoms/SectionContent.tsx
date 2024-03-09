export function SectionContent({
  title,
  subTitle,
  description,
  link,
}: {
  title?: string;
  subTitle?: string;
  description?: string;
  link?: string;
}) {
  return (
    <a
      href={link}
      target={link?.includes("#") ? "_top" : "_blank"}
      className="shadow p-24 h-full flex flex-col gap-y-8 hover:cursor-pointer hover:text-white text-primary hover:bg-primary rounded-lg"
    >
      <h5 className="font-roboto text-[3rem] font-bold mb-8">{title}</h5>
      <h6 className="font-roboto text-[1.6rem] font-extralight">{subTitle}</h6>
      <h6 className="font-roboto text-[1.6rem] font-extralight">
        {description}
      </h6>
    </a>
  );
}
