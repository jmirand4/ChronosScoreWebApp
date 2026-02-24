import { useTranslation } from '../context/LanguageContext';


export const Summary = ({ totalDuration, onClear }) => {

  const { t } = useTranslation();

  return (<div className="mb-8 p-6 bg-white rounded-xl shadow-md border-l-8 border-blue-500 flex justify-between items-center">
    <div>
      <h1 className="text-slate-500 uppercase text-xs font-bold tracking-widest">{t('totalDurationLabel')}</h1>
      <p className="text-4xl font-mono font-black text-slate-900">{totalDuration}</p>
    </div>
    <button onClick={onClear} className="text-xs text-red-400 hover:text-red-600 underline">{t('clearProject')}</button>
  </div>
  )
};