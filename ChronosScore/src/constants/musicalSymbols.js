import halfNote from '../assets/img/HalfNote.png';
import quarterNote from '../assets/img/QuarterNote.png';
import eighthNote from '../assets/img/EighthNote.png';
import sixteenthNote from '../assets/img/SixteenthNote.png';

export function getNoteValues(t) {
  return [
    { label: t('halfNote'), value: 2, icon: halfNote },
    { label: t('quarterNote'), value: 4, icon: quarterNote },
    { label: t('eighthNote'), value: 8, icon: eighthNote },
    { label: t('sixteenthNote'), value: 16, icon: sixteenthNote },
  ];
}