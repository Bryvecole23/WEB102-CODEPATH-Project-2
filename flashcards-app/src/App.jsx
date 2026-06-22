import { useState } from "react";
import "./App.css";
import Flashcard from "./components/flashCard";

function App() {
  const cards = [
    {
      question: "What is RAM?",
      answer: "Random Access Memory.",
      difficulty: "Easy",
    },
    {
      question: "What is a CPU?",
      answer: "Central Processing Unit.",
      difficulty: "Easy",
    },
    {
      question: "What is a Process?",
      answer: "A program currently in execution.",
      difficulty: "Easy",
    },
    {
      question: "What does FCFS stand for?",
      answer: "First Come First Served.",
      difficulty: "Medium",
    },
    {
      question: "What is an Operating System?",
      answer: "Software that manages hardware and software resources.",
      difficulty: "Medium",
    },
    {
      question: "What is a Thread?",
      answer: "The smallest unit of execution within a process.",
      difficulty: "Medium",
    },
    {
      question: "What is Big O Notation?",
      answer: "A way to describe algorithm efficiency as input size grows.",
      difficulty: "Hard",
    },
    {
      question: "What is Virtual Memory?",
      answer: "Using storage space as an extension of RAM.",
      difficulty: "Hard",
    },
    {
      question: "What is Cache Memory?",
      answer: "Small, high-speed memory storing frequently used data.",
      difficulty: "Hard",
    },
    {
      question: "What is an Algorithm?",
      answer: "A step-by-step procedure for solving a problem.",
      difficulty: "Easy",
    },
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const checkAnswer = () => {
    const correctAnswer = cards[currentCard].answer
      .toLowerCase()
      .replace(".", "")
      .trim();

    const userGuess = guess
      .toLowerCase()
      .replace(".", "")
      .trim();

    if (userGuess === correctAnswer) {
      setFeedback("Correct!");
      setIsFlipped(true);

      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);

      if (newStreak > longestStreak) {
        setLongestStreak(newStreak);
      }
    } else {
      setFeedback("Incorrect!");
      setCurrentStreak(0);
    }
  };

  const nextCard = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
      setIsFlipped(false);
      setGuess("");
      setFeedback("");
    }
  };

  const previousCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setIsFlipped(false);
      setGuess("");
      setFeedback("");
    }
  };

  return (
    <div className="app">
      <h1>Computer Science Flashcards</h1>

      <p>
        Test your knowledge of computer science concepts
        commonly used in technical interviews and
        coursework.
      </p>

      <h3>Total Cards: {cards.length}</h3>

      <p>
        Current Streak: {currentStreak} | Longest
        Streak: {longestStreak}
      </p>

      <div className="badge">
        COMPUTER SCIENCE INTERVIEW PREP
      </div>

      <Flashcard
        card={cards[currentCard]}
        isFlipped={isFlipped}
      />

      <div className="guess-section">
        <input
          type="text"
          placeholder="Enter your answer"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />

        <button onClick={checkAnswer}>
          Submit Guess
        </button>
      </div>

      {feedback && (
        <p
          className={
            feedback === "Correct!"
              ? "correct"
              : "incorrect"
          }
        >
          {feedback}
        </p>
      )}

      <div className="navigation-buttons">
        <button
          onClick={previousCard}
          disabled={currentCard === 0}
        >
          Previous
        </button>

        <button
          onClick={nextCard}
          disabled={
            currentCard === cards.length - 1
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;