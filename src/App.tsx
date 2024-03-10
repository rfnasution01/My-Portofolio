import {
  Capability,
  Homepage,
  MarqueeInfo,
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
        <h1>My Project</h1>
        <h1>Contact</h1>
      </div>
    </div>
  );
}

export default App;
