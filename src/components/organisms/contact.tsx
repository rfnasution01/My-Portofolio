import { DataContact } from "../../const/data-contact";

export function Contact() {
  return (
    <div className="flex items-center justify-center gap-x-16 py-80 bg-primary-tint-3">
      {DataContact.map((item, idx) => (
        <a
          href={item?.link}
          target="_blank"
          className="text-primary p-16 hover:bg-background"
          key={idx}
        >
          <span>{item?.img}</span>
        </a>
      ))}
    </div>
  );
}
