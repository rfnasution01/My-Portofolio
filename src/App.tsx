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
      <div className="flex flex-col gap-y-48 m-48">
        <MarqueeInfo />
        <Skill />
        <Capability />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
