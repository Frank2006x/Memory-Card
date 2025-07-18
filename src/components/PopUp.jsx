function PopUp({ setGameOver, score }) {
  function handleRestart() {
    setGameOver(false);
  }

  return (
    <div className="pop-overlay">
      <div className="pop-box">
        <div className="pokemon-container">
          <img src="pika.png" alt="Pikachu" className="pokemon-img" />
        </div>
        <h1 className="game-over">Game Over</h1>
        <h3 className="game-over">Score:{score} </h3>
        <button
          className="restart-btn"
          onClick={() => {
            handleRestart();
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default PopUp;
