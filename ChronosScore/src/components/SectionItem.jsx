import { AnimatePresence, Reorder } from 'framer-motion';
import { calculateSeconds, formatTime } from '../utils/musicMath'
import { useTranslation } from '../context/LanguageContext';



export const SectionList = ({ sections, handleEditClick, setSections }) => {

    const isDraggable = sections.length > 1;
    const { t } = useTranslation();
    
    return (
        <Reorder.Group
            axis="y"
            values={sections}
            onReorder={setSections}
            className="space-y-4 relative flex flex-col gap-4"
            disabled={!isDraggable}
        >
            <AnimatePresence mode="popLayout">
                {sections.map((section) => (
                    <Reorder.Item
                        key={section.id}
                        value={section}
                        dragListener={isDraggable}

                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}

                        transition={{
                            type: "spring",
                            stiffness: 600,
                            damping: 30,
                            mass: 1
                        }}

                        style={{ position: "relative" }}
                        className={`p-4 bg-white rounded-lg shadow-sm flex justify-between items-center border border-transparent hover:border-blue-200 transition-colors`}
                    >
                        <div className="flex items-center gap-4">
                            <div
                                className="flex-grow cursor-pointer"
                                onClick={() => handleEditClick(section)}
                            >
                                <h2 className="font-bold text-slate-800 flex items-center gap-2">
                                    {section.name}
                                    <span className="text-[10px] bg-slate-200 px-1 rounded text-slate-500 font-normal italic">{t('clickToEdit')}</span>
                                </h2>
                                <p className="text-sm text-slate-400">
                                    {section.measures} {t('measuresLabel')}
                                </p>
                                <p className="text-sm text-slate-400">
                                    {section.bpm} BPM | {section.beatsPerMeasure}/{section.noteValue}
                                </p>
                            </div>
                        </div>

                        <div className="font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded">
                            {formatTime(calculateSeconds(
                                section.beatsPerMeasure,
                                section.noteValue,
                                section.bpm,
                                section.reference,
                                section.measures,
                                section.dotted
                            ))}
                        </div>
                    </Reorder.Item>
                ))}
            </AnimatePresence>
        </Reorder.Group>
    );
};