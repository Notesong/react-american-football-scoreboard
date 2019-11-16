//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [homeScore, setHomeScore] = useState(32);
  let [awayScore, setAwayScore] = useState(32);
  let [quarter, setQuarter] = useState(4);

  // functional components
  // add 7 points for touchdown
  function TouchDown(teamScore) {
    return teamScore + 7;
  }
  // add 3 points for field goal
  function FieldGoal(teamScore) {
    return teamScore + 3;
  }
  // bump the quarter up to the next one
  function Quarter(quarter) {
    return ++quarter;
  }
  
  // increase home score
  // const homeTouchDown = e => {
  //   setHomeScore(homeScore + 7);
  // };
  // const homeFieldGoal = e => {
  //   setHomeScore(homeScore + 3);
  // };

  // increase away score
  // const awayTouchDown = e => {
  //   setAwayScore(awayScore + 7)
  // };
  // const awayFieldGoal = e => {
  //   setAwayScore(awayScore + 3)
  // };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        {/* pass quarter to BottomRow */}
        <BottomRow quarter = {quarter} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {() => setHomeScore(() => TouchDown(homeScore))}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {() => setHomeScore(() => FieldGoal(homeScore))}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {() => setAwayScore(() => TouchDown(awayScore))}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {() => setAwayScore(() => FieldGoal(awayScore))}>Away Field Goal</button>
        </div>
        <div>
          <button className="quarterButton" onClick = {() => setQuarter(() => Quarter(quarter))}>Next Quarter</button>
        </div>
      </section>
    </div>
  );
}

export default App;