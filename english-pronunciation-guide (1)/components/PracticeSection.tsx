import React, { useState } from 'react';
import type { GapFillingExercise, MultipleChoiceExercise as MultipleChoiceExerciseType } from '../types';
import { GapFillingExercise as GapFillingExerciseComponent } from './GapFillingExercise';
import { MultipleChoiceExercise as MultipleChoiceExerciseComponent } from './MultipleChoiceExercise';

interface PracticeSectionProps {
  gapFillingExercises: GapFillingExercise[];
  multipleChoiceExercises: MultipleChoiceExerciseType[];
}

export const PracticeSection: React.FC<PracticeSectionProps> = ({ gapFillingExercises, multipleChoiceExercises }) => {
  const [activeTab, setActiveTab] = useState<'gap' | 'mc'>('gap');

  const hasGapFilling = gapFillingExercises.length > 0;
  const hasMultipleChoice = multipleChoiceExercises.length > 0;

  if (!hasGapFilling && !hasMultipleChoice) {
    return null;
  }
  
  // Set initial active tab to the first available exercise type
  useState(() => {
    if (hasGapFilling) setActiveTab('gap');
    else if (hasMultipleChoice) setActiveTab('mc');
  });


  const tabButtonClasses = (tabName: 'gap' | 'mc') => 
    `px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
      activeTab === tabName 
        ? 'bg-blue-600 text-white' 
        : 'text-gray-600 hover:bg-gray-200'
    }`;

  return (
    <div className="mt-6 border border-gray-200 rounded-lg bg-gray-50/80">
        <div className="px-4 pt-4">
            <h5 className="text-lg font-bold text-gray-700">Practice Zone</h5>
            <div className="border-b border-gray-200 mt-3">
                <nav className="-mb-px flex space-x-4" aria-label="Tabs">
                  {hasGapFilling && (
                    <button onClick={() => setActiveTab('gap')} className={tabButtonClasses('gap')}>
                      Gap Filling
                    </button>
                  )}
                  {hasMultipleChoice && (
                    <button onClick={() => setActiveTab('mc')} className={tabButtonClasses('mc')}>
                      Multiple Choice
                    </button>
                  )}
                </nav>
            </div>
        </div>

        <div className="p-4 space-y-4">
            {activeTab === 'gap' && hasGapFilling && gapFillingExercises.map((ex, index) => (
                <GapFillingExerciseComponent key={index} exercise={ex} index={index} />
            ))}
            {activeTab === 'mc' && hasMultipleChoice && multipleChoiceExercises.map((ex, index) => (
                <MultipleChoiceExerciseComponent key={index} exercise={ex} index={index} />
            ))}
        </div>
    </div>
  );
};
