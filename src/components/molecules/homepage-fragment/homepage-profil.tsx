import profile from "../../../../public/img/profile.png";

export function HomepageProfil() {
  return (
    <div className="flex-1 flex items-end justify-center">
      <img
        src={profile}
        alt="Rivai Fansuri Nasution"
        className="h-[70%] w-full"
      />
    </div>
  );
}
