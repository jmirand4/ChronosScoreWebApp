import { useState, useMemo, useEffect } from 'react';

const INITIAL_FORM = {
  name: '',
  bpm: 120,
  beatsPerMeasure: 4,
  noteValue: 4,
  measures: 8,
  reference: 4,
  dotted: false
};

export function useSections() {
  const [sections, setSections] = useState(() => {
    const saved = localStorage.getItem('chronos-sections');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Load Storage Local Failed', e);
      }
    }
    return [
      { id: 1, name: 'Intro', bpm: 120, beatsPerMeasure: 4, noteValue: 4, measures: 8, reference: 4, dotted: false }
    ];
  });

  useEffect(() => {
    localStorage.setItem('chronos-sections', JSON.stringify(sections));
  }, [sections]);

  return {
    sections,
    setSections,
    INITIAL_FORM
  };
}
