
import React, { useState, useCallback } from 'react';
import { generateSpeech } from '../services/geminiService';
import { decode, decodeAudioData } from '../utils/audioUtils';
import { SpeakerIcon } from './icons/SpeakerIcon';
import { LoadingSpinner } from './icons/LoadingSpinner';

interface ExampleWordProps {
  word: string;
  audioContext: AudioContext | null;
}

export const ExampleWord: React.FC<ExampleWordProps> = ({ word, audioContext }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePlaySound = useCallback(async () => {
    if (isSpeaking || !audioContext) return;
    setIsSpeaking(true);
    setError(null);

    // Resume AudioContext if it's suspended
    if (audioContext.state === 'suspended') {
      await audioContext.resume();
    }

    try {
      const base64Audio = await generateSpeech(word);
      if (!base64Audio) throw new Error("No audio data received.");

      const audioBytes = decode(base64Audio);
      const audioBuffer = await decodeAudioData(audioBytes, audioContext, 24000, 1);
      
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.start();

      source.onended = () => {
        setIsSpeaking(false);
      };

    } catch (err) {
      console.error('Error playing sound:', err);
      setError('Failed to play audio.');
      setIsSpeaking(false);
    }
  }, [word, isSpeaking, audioContext]);
  
  const buttonColor = error 
    ? 'bg-red-100 text-red-700 hover:bg-red-200' 
    : 'bg-gray-100 text-gray-700 hover:bg-gray-200';

  return (
    <button
      onClick={handlePlaySound}
      disabled={isSpeaking || !audioContext}
      className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed ${buttonColor}`}
      title={error ? error : `Pronounce "${word}"`}
    >
      <span>{word}</span>
      {isSpeaking ? <LoadingSpinner /> : <SpeakerIcon />}
    </button>
  );
};
