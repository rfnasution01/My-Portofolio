import homepageBg from "/img/spin-decoration-wave.png";
import { HomepageInfo, HomepageProfil } from "../molecules/homepage-fragment";

export function Homepage() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(207, 248, 253, 0.5), rgba(237, 248, 253, 0.5)), url(${homepageBg})`,
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        transform: "scaleX(-1)",
      }}
    >
      <div
        className="min-h-screen flex flex-row min-w-full"
        style={{ transform: "scaleX(-1)" }}
      >
        <HomepageInfo />
        <HomepageProfil />
      </div>
    </div>
  );
}
