function SideBar({ score, bestScore }) {
  const resetScore = () => {
    localStorage.setItem("best", 0);
    
  };

  return (
    <div className="side-bar">
      <h1>Pokémon Memory Match</h1>
      <p>
        Get ready for a fun challenge! Click on Pokémon images to earn points,
        but remember: you can’t click any image more than once. Keep track and
        score as many points as you can!
      </p>

    
      <h3>Score : {score}</h3>
      <h3>Best Score : {bestScore}</h3>
      <button onClick={() => resetScore()} className="restart-btn" type="button">
        reset the score
      </button>
    </div>
  );
}

export default SideBar;
