import React from 'react';
import { Check, X, Music2 } from 'lucide-react';

interface AnswerOptionProps {
  option: string;
  index: number;
  selectedAnswer: string | null;
  correctAnswer: string;
  onSelect: (option: string) => void;
}

const LETTERS = ['A', 'B', 'C', 'D'];

export const AnswerOption: React.FC<AnswerOptionProps> = ({
  option,
  index,
  selectedAnswer,
  correctAnswer,
  onSelect,
}) => {
  const isAnswered = selectedAnswer !== null;
  const isSelected = selectedAnswer === option;
  const isCorrectOption = option === correctAnswer;

  let stateClass = '';
  if (isAnswered) {
    if (isCorrectOption) {
      stateClass = 'is-correct';
    } else if (isSelected && !isCorrectOption) {
      stateClass = 'is-wrong';
    } else {
      stateClass = 'is-dimmed';
    }
  }

  return (
    <button
      type="button"
      className={`esc-answer-option ${stateClass}`}
      onClick={() => onSelect(option)}
      disabled={isAnswered}
    >
      <span className="esc-option-letter">{LETTERS[index] || index + 1}</span>
      <span className="esc-option-text">{option}</span>
      <span className="esc-option-indicator">
        {isAnswered && isCorrectOption && <Check size={18} />}
        {isAnswered && isSelected && !isCorrectOption && <X size={18} />}
        {!isAnswered && <Music2 size={16} className="esc-option-music-icon" />}
      </span>
    </button>
  );
};
