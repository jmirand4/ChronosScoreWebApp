import { useState, useEffect } from 'react';
import { getNoteValues } from '../constants/musicalSymbols';
import { useTranslation } from '../context/LanguageContext';



export const SectionForm = ({ onSubmit, initialData, onCancel }) => {
    const [form, setForm] = useState(initialData);
    const { t } = useTranslation();
    const NOTE_VALUES = getNoteValues(t);


    useEffect(() => {
        setForm(initialData);
    }, [initialData]);

    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };


    return (
        <form
            className="mb-8 p-4 bg-white rounded-lg shadow-lg border border-blue-200"
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(form);
            }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700">{t('nameLabel')}</label>
                    <input className="mt-1 p-2 border rounded w-full" type="text" name="name" value={form.name} onChange={handleFormChange} required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700">{t('bpmLabel')}</label>
                    <input className="mt-1 p-2 border rounded w-full" type="number" name="bpm" value={form.bpm} onChange={handleFormChange} min="1" required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700">{t('timeSigNumerator')}</label>
                    <input className="mt-1 p-2 border rounded w-full" type="number" name="beatsPerMeasure" value={form.beatsPerMeasure} onChange={handleFormChange} min="1" required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700">{t('timeSigDenominator')}</label>
                    <input className="mt-1 p-2 border rounded w-full" type="number" name="noteValue" value={form.noteValue} onChange={handleFormChange} min="1" required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700">{t('measuresLabel')}</label>
                    <input className="mt-1 p-2 border rounded w-full" type="number" name="measures" value={form.measures} onChange={handleFormChange} min="1" required />
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('referenceNote')}</label>
                <div className="grid grid-cols-5 gap-2">
                    {NOTE_VALUES.map((note) => (
                        <button
                            key={note.value}
                            type="button"
                            onClick={() => setForm({ ...form, reference: note.value })}
                            className={`flex flex-col items-center justify-between p-2 rounded-lg border-2 transition-all h-20 min-w-0 ${form.reference === note.value ? 'border-blue-500 bg-blue-50' : 'border-slate-200'
                                }`}
                        >
                            <div className="flex items-center justify-center h-10 w-full">
                                <img
                                    src={note.icon}
                                    alt={note.label}
                                    className="h-full w-auto object-contain"
                                />

                                {form.dotted && (
                                    <span className="text-2xl font-black leading-none text-slate-800 ml-0.5 self-center mb-2">
                                        .
                                    </span>
                                )}
                            </div>

                            <span className="text-[9px] uppercase font-bold text-slate-500 text-center leading-tight truncate w-full">
                                {note.label}
                            </span>
                        </button>
                    ))}
                </div>
                <label className="inline-flex items-center mt-3 cursor-pointer">
                    <input type="checkbox" name="dotted" checked={form.dotted} onChange={handleFormChange} className="form-checkbox h-4 w-4 text-blue-600" />
                    <span className="ml-2 text-sm text-slate-600">{t('dottedNote')}</span>
                </label>
            </div>

            <div className="flex gap-2">
                <button type="submit" className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-bold hover:bg-blue-600 transition shadow">
                    {form.id ? t('updateBtn') : t('addBtn')}
                </button>
                <button type="button" onClick={onCancel} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition">
                    {t('cancelBtn')}
                </button>
            </div>
        </form>
    );
};