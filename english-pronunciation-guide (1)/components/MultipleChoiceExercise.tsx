import React, { useState } from 'react';
import type { MultipleChoiceExercise as Exercise } from '../types';
import { CheckIcon } from './icons/CheckIcon';
import { LightBulbIcon } from './icons/LightBulbIcon';
import { XIcon } from './icons/XIcon';

interface MultipleChoiceExerciseProps {
  exercise: Exercise;
  index: number;
}

export const MultipleChoiceExercise: React.FC<MultipleChoiceExerciseProps> = ({ exercise, index }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | 'show_answer' | null>(null);
  
  const handleSelectOption = (option: string) => {
    if (feedback === null) {
      setSelectedOption(option);
    }
  };

  const handleCheck = () => {
    if (!selectedOption) return;
    if (selectedOption === exercise.answer) {
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }
  };

  const handleTryAgain = () => {
    setSelectedOption(null);
    setFeedback(null);
  };
  
  const handleShowAnswer = () => {
      setFeedback('show_answer');
      setSelectedOption(exercise.answer);
  }

  const getOptionClasses = (option: string) => {
    let base = "w-full text-left p-2 rounded-md border text-sm transition-colors cursor-pointer disabled:cursor-not-allowed";
    if (feedback === null) {
      return `${base} ${selectedOption === option ? 'bg-blue-100 border-blue-400' : 'bg-white hover:bg-gray-50 border-gray-300'}`;
    }
    if (option === exercise.answer) {
      return `${base} bg-green-100 border-green-500 text-green-800`;
    }
    if (option === selectedOption && feedback === 'incorrect') {
      return `${base} bg-red-100 border-red-500 text-red-800`;
    }
    return `${base} bg-gray-50 border-gray-200 text-gray-500`;
  };

  return (
    <div className="p-4 bg-white rounded-md border border-gray-200 text-sm">
      <div className="flex items-start">
        <span className="mr-2 font-semibold text-gray-500">{index + 1}.</span>
        <div className="flex-1">
          <p className="text-gray-800 font-medium mb-3">{exercise.question}</p>
          <div className="space-y-2">
            {exercise.options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelectOption(option)}
                disabled={feedback !== null}
                className={getOptionClasses(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="mt-3 flex items-center space-x-2">
             {feedback === null && (
                 <button onClick={handleCheck} disabled={!selectedOption} className="px-3 py-1 bg-blue-500 text-white rounded-md text-xs font-semibold hover:bg-blue-600 disabled:bg-gray-300">Check</button>
            )}
            
            {feedback !== null && (
                 <button onClick={handleTryAgain} className="px-3 py-1 bg-gray-500 text-white rounded-md text-xs font-semibold hover:bg-gray-600">Try Again</button>
            )}

            {feedback !== 'correct' && feedback !== 'show_answer' && (
                 <button onClick={handleShowAnswer} className="p-1.5 bg-yellow-400 text-white rounded-md text-xs font-semibold hover:bg-yellow-500 flex items-center"><LightBulbIcon/></button>
            )}

            {feedback === 'correct' && <span className="flex items-center text-green-600 font-semibold text-xs"><CheckIcon /> Correct!</span>}
            {feedback === 'incorrect' && <span className="flex items-center text-red-600 font-semibold text-xs"><XIcon /> The correct answer is highlighted.</span>}
            {feedback === 'show_answer' && <span className="flex items-center text-blue-600 font-semibold text-xs"><LightBulbIcon /> Here is the answer.</span>}
          </div>
        </div>
      </div>
    </div>
  );
};
