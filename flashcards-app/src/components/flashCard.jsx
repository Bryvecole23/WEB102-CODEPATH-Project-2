function Flashcard({ card, isFlipped, handleFlip }) {
    return (
      <div
        className={`flashcard ${card.difficulty.toLowerCase()}`}
        onClick={handleFlip}
      >
        <div>
          <div className="difficulty-tag">
            {card.difficulty}
          </div>
  
          <h2>
            {isFlipped ? card.answer : card.question}
          </h2>
        </div>
      </div>
    );
  }
  
  export default Flashcard;