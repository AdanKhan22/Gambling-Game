import "./App.css";
import Grid from "./Components/Grid/Grid";
import IntroScreen from "./Components/Intro-Screen/intro";
import StatsBar from "./Components/Stats-Bar/StatsBar";

import { useSelector } from "react-redux";

function App() {
  const isBidEntered = useSelector((state) => state.isBidEntered.value);

  return (
    <>
      <IntroScreen></IntroScreen>
      <StatsBar></StatsBar>
      {isBidEntered ? (
        <Grid />
      ) : (
        <h1 className="enter-bid">Please Enter Your Bidding Amount </h1>
      )}
    </>
  );
}

export default App;
