import React, { useState } from 'react';
import type { GapFillingExercise as Exercise } from '../types';
import { CheckIcon } from './icons/CheckIcon';
import { LightBulbIcon } from './icons/LightBulbIcon';
import { XIcon } from './icons/XIcon';

interface GapFillingExerciseProps {
  exercise: Exercise;
  index: number;
}

export const GapFillingExercise: React.FC<GapFillingExerciseProps> = ({ exercise, index }) => {
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | 'show_answer' | null>(null);

  const questionParts = exercise.question.split('___');

  const handleCheck = () => {
    if (userInput.trim().toLowerCase() === exercise.answer.toLowerCase()) {
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }
  };
  
  const handleTryAgain = () => {
      setUserInput('');
      setFeedback(null);
  }

  const handleShowAnswer = () => {
      setUserInput(exercise.answer);
      setFeedback('show_answer');
  }

  const getBorderColor = () => {
    if (feedback === 'correct') return 'border-green-500';
    if (feedback === 'incorrect') return 'border-red-500';
    if (feedback === 'show_answer') return 'border-blue-500';
    return 'border-gray-300';
  };

  return (
    <div className="p-4 bg-white rounded-md border border-gray-200 text-sm">
      <div className="flex items-start">
        <span className="mr-2 font-semibold text-gray-500">{index + 1}.</span>
        <div className="flex-1">
          <p className="text-gray-800">
            {questionParts[0]}
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              disabled={feedback === 'correct' || feedback === 'show_answer'}
              className={`inline-block w-28 mx-2 px-2 py-1 border-b-2 bg-gray-100 rounded-t-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors ${getBorderColor()}`}
              aria-label="Fill in the blank"
            />
            {questionParts[1]}
          </p>

          <div className="mt-3 flex items-center space-x-2">
            {feedback === null && (
                 <button onClick={handleCheck} className="px-3 py-1 bg-blue-500 text-white rounded-md text-xs font-semibold hover:bg-blue-600">Check</button>
            )}
            
            {feedback !== null && (
                 <button onClick={handleTryAgain} className="px-3 py-1 bg-gray-500 text-white rounded-md text-xs font-semibold hover:bg-gray-600">Try Again</button>
            )}

            {feedback !== 'correct' && feedback !== 'show_answer' && (
                 <button onClick={handleShowAnswer} className="p-1.5 bg-yellow-400 text-white rounded-md text-xs font-semibold hover:bg-yellow-500 flex items-center"><LightBulbIcon/></button>
            )}

            {feedback === 'correct' && <span className="flex items-center text-green-600 font-semibold text-xs"><CheckIcon /> Correct!</span>}
            {feedback === 'incorrect' && <span className="flex items-center text-red-600 font-semibold text-xs"><XIcon /> Not quite.</span>}
            {feedback === 'show_answer' && <span className="flex items-center text-blue-600 font-semibold text-xs"><LightBulbIcon /> Here is the answer.</span>}
          </div>
        </div>
      </div>
    </div>
  );
};
