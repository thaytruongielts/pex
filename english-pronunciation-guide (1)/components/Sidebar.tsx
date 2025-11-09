
import React from 'react';
import type { RuleSection } from '../types';

interface SidebarProps {
  sections: RuleSection[];
  activeSectionId: string;
  onSelectSection: (sectionId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ sections, activeSectionId, onSelectSection }) => {
  return (
    <aside className="w-full md:w-64 lg:w-72 bg-white md:border-r border-gray-200 p-4 md:p-6 sticky top-0 md:h-screen md:overflow-y-auto">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Pronunciation Guide</h2>
      <nav>
        <ul>
          {sections.map((section) => (
            <li key={section.id} className="mb-2">
              <button
                onClick={() => onSelectSection(section.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSectionId === section.id
                    ? 'bg-blue-100 text-blue-700 shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {section.title.split('. ')[1] || section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
