import React from 'react';
import type { RuleGroup } from '../types';
import { ExampleWord } from './ExampleWord';
import { PracticeSection } from './PracticeSection';

interface PronunciationCardProps {
  group: RuleGroup;
  audioContext: AudioContext | null;
}

export const PronunciationCard: React.FC<PronunciationCardProps> = ({ group, audioContext }) => {
  return (
    <div id={group.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200/80">
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{group.title}</h3>
        {group.description && <p className="text-gray-600 mb-6">{group.description}</p>}
        
        <div className="space-y-6">
          {group.rules.map((rule, index) => (
            <div key={index} className="border-t border-gray-200 pt-6 first:border-t-0 first:pt-0">
              <h4 className="text-lg font-semibold text-blue-600 flex items-center">
                {rule.phoneme && <span className="font-mono text-xl bg-blue-50 text-blue-700 px-2 py-1 rounded-md mr-3">{rule.phoneme}</span>}
                {rule.title}
              </h4>
              <p className="text-gray-700 mt-2 mb-4">{rule.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {rule.examples.map((word) => (
                  <ExampleWord key={word} word={word} audioContext={audioContext} />
                ))}
              </div>

              {rule.notes && <p className="text-sm text-gray-500 mt-3 italic">Lưu ý: {rule.notes}</p>}
              {rule.exceptions && <p className="text-sm text-amber-700 bg-amber-50 p-2 rounded-md mt-3">Ngoại lệ: {rule.exceptions}</p>}
              
              {(rule.gapFillingExercises && rule.gapFillingExercises.length > 0) || (rule.multipleChoiceExercises && rule.multipleChoiceExercises.length > 0) ? (
                <PracticeSection
                  gapFillingExercises={rule.gapFillingExercises || []}
                  multipleChoiceExercises={rule.multipleChoiceExercises || []}
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
