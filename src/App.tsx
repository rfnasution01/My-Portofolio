import {
  Capability,
  Contact,
  Homepage,
  MarqueeInfo,
  Project,
  Skill,
} from "./components/organisms";

function App() {
  return (
    <div className="bg-background">
      <Homepage />
      <div className="flex flex-col gap-y-80 m-48">
        <MarqueeInfo />
        <Skill />
        <Capability />
        <Project />
      </div>
      <Contact />
    </div>
  );
}

export default App;
