import { Download } from "lucide-react";

export function HomepageInfo() {
  return (
    <div className="flex-1 p-48 flex flex-col items-start justify-start px-48 gap-y-32">
      <div className="rounded-md flex flex-col gap-y-16 text-primary">
        <h4 className="font-sf-pro text-[5rem]">I'm</h4>
        <h1 className="font-sf-pro text-[7rem] font-bold">
          Rivai Fansuri Nasution
        </h1>
        <h3 className=""></h3>
      </div>
      <div className="flex flex-row items-center ">
        <a
          href="https://peruri.rakamin.com/profile/rivai-fansuri-nst-varfrrxovb2zm4um"
          target="_blank"
        >
          <button
            className="py-16 px-32 bg-primary text-white rounded-lg animate-bounce border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary"
            type="button"
          >
            <div className="flex gap-x-16 items-center">
              <span>
                <Download size={20} />
              </span>
              <span className="font-roboto text-[2rem] font-extralight">
                Download CV
              </span>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}
