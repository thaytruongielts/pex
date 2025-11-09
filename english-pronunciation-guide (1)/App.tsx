
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { PronunciationCard } from './components/PronunciationCard';
import { PRONUNCIATION_DATA } from './constants';
import type { RuleSection } from './types';

const App: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>(PRONUNCIATION_DATA[0].id);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  useEffect(() => {
    // Initialize AudioContext after user interaction (e.g., component mount)
    // as it's required by modern browsers.
    setAudioContext(new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 }));
  }, []);

  const activeSection = PRONUNCIATION_DATA.find(section => section.id === activeSectionId) || PRONUNCIATION_DATA[0];

  const handleSelectSection = (sectionId: string) => {
    setActiveSectionId(sectionId);
    const firstGroup = PRONUNCIATION_DATA.find(s => s.id === sectionId)?.groups[0]?.id;
    setActiveGroup(firstGroup || null);
  };

  useEffect(() => {
    if (activeSection) {
      setActiveGroup(activeSection.groups[0].id);
    }
  }, [activeSection]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-gray-800">
      <Sidebar
        sections={PRONUNCIATION_DATA}
        activeSectionId={activeSectionId}
        onSelectSection={handleSelectSection}
      />
      <main className="flex-1 p-4 sm:p-6 md:p-10 overflow-y-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{activeSection.title}</h1>
          <p className="text-lg text-gray-600 mt-2">{activeSection.description}</p>
        </header>
        <div className="space-y-8">
          {activeSection.groups.map((group) => (
            <PronunciationCard key={group.id} group={group} audioContext={audioContext} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
