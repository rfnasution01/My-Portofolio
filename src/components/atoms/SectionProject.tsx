export function SectionProject({
  img,
  title,
  description,
}: {
  img: string | undefined;
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-row gap-x-16 shadow hover:shadow-lg p-24 bg-white rounded-lg h-full cursor-pointer">
      <img src={img} alt={title} className="h-[6rem]" />
      <div className="flex flex-col gap-y-8">
        <h5 className="font-sf-pro text-[3rem] font-bold text-primary">
          {title}
        </h5>
        <h5 className="font-roboto text-[1.6rem] font-extralight text-primary text-nowrap">
          {description}
        </h5>
      </div>
    </div>
  );
}
