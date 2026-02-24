import { useState, useMemo } from 'react';
import { calculateSeconds, formatTime } from './utils/musicMath';
import { Summary } from './components/Summary';
import { SectionForm } from './components/SectionForm';
import { SectionList } from './components/SectionItem';
import { useSections } from './hooks/useSections';
import { LanguageToggle } from './components/LanguageToggle'; 
import { useTranslation } from './context/LanguageContext';



function App() {
  const { sections, setSections, INITIAL_FORM } = useSections();
  const [editingId, setEditingId] = useState(null);
  const { t } = useTranslation();

  const totalDuration = useMemo(() => {
    return sections.reduce((acc, section) => {
      const duration = calculateSeconds(
        section.beatsPerMeasure,
        section.noteValue,
        section.bpm,
        section.reference,
        section.measures,
        section.dotted
      );
      return acc + duration;
    }, 0);
  }, [sections]);

  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState(INITIAL_FORM);

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleEditClick = (section) => {
    setForm(section);   
    setEditingId(section.id);
    setShowForm(true);     
  };


  const handleSubmit = (formData) => {
    if (editingId) {
    
      setSections(prev => prev.map(s =>
        s.id === editingId ? { ...formData, id: editingId } : s
      ));
      setEditingId(null); 
    } else {
      setSections(prev => [...prev, { ...formData, id: Date.now() }]);
    }

    setForm(INITIAL_FORM);
    setShowForm(false);
  };

  const clearProject = () => {
    if (window.confirm(t('confirmClear'))) {
      setSections([]);
      localStorage.removeItem('chronos-sections');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <LanguageToggle />


      <Summary totalDuration={formatTime(totalDuration)} onClear={clearProject} />


      <div className="mb-6">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded shadow transition"
          onClick={() => setShowForm((v) => !v)}
        >
          <span className="text-xl">+</span> {t('newSectionBtn')}
        </button>
      </div>

      {showForm && (
        <SectionForm
          onSubmit={handleSubmit}
          initialData={form}
          onCancel={() => {
            setForm(INITIAL_FORM);
            setEditingId(null);
            setShowForm(false);
          }}
        />
      )}

      <SectionList sections={sections} handleEditClick={handleEditClick} setSections={setSections} />

    </div>
  )
}
export default App