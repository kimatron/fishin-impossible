import React, { useState, useEffect } from "react";
import Grid from "./Grid";
import FishInfo from "./FishInfo";
import Timer from "./Timer";
import Score from "./Score";

function Game() {
  const [selectedFish, setSelectedFish] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleCellClick = (fish) => {
    if (!selectedFish) {
      setSelectedFish(fish);
      setScore(score + 1);
    }
  };

  return (
    <div className="game">
      <h1>Caribbean Fish Explorer</h1>
      <Timer timeLeft={timeLeft} />
      <Score score={score} />
      <Grid onCellClick={handleCellClick} />
      {selectedFish && (
        <FishInfo fish={selectedFish} onClose={() => setSelectedFish(null)} />
      )}
    </div>
  );
}

export default Game;
