import { useState } from "react";
import "./App.css";
import Flashcard from "./components/flashCard";

function App() {
  const cards = [
    {
      question: "What is RAM?",
      answer: "Random Access Memory.",
      difficulty: "Easy"
    },
    {
      question: "What is a CPU?",
      answer: "Central Processing Unit.",
      difficulty: "Easy"
    },
    {
      question: "What is a Process?",
      answer: "A program currently in execution.",
      difficulty: "Easy"
    },
    {
      question: "What does FCFS stand for?",
      answer: "First Come First Served.",
      difficulty: "Medium"
    },
    {
      question: "What is an Operating System?",
      answer: "Software that manages hardware and software resources.",
      difficulty: "Medium"
    },
    {
      question: "What is a Thread?",
      answer: "The smallest unit of execution within a process.",
      difficulty: "Medium"
    },
    {
      question: "What is Big O Notation?",
      answer: "A way to describe algorithm efficiency as input size grows.",
      difficulty: "Hard"
    },
    {
      question: "What is Virtual Memory?",
      answer: "Using storage space as an extension of RAM.",
      difficulty: "Hard"
    },
    {
      question: "What is Cache Memory?",
      answer: "Small, high-speed memory storing frequently used data.",
      difficulty: "Hard"
    },
    {
      question: "What is an Algorithm?",
      answer: "A step-by-step procedure for solving a problem.",
      difficulty: "Easy"
    }
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const getRandomCard = () => {
    let randomIndex;

    do {
      randomIndex = Math.floor(
        Math.random() * cards.length
      );
    } while (randomIndex === currentCard);

    setCurrentCard(randomIndex);
    setIsFlipped(false);
  };

  return (
    <div className="app">
      <h1>Computer Science Flashcards</h1>

      <p>
        Test your knowledge of computer science
        concepts commonly used in technical
        interviews and coursework.
      </p>

      <h3>Total Cards: {cards.length}</h3>

      <div className="badge">
        COMPUTER SCIENCE INTERVIEW PREP
      </div>

      <Flashcard
        card={cards[currentCard]}
        isFlipped={isFlipped}
        handleFlip={flipCard}
      />

      <button onClick={getRandomCard}>
        Next Random Card
      </button>
    </div>
  );
}

export default App;