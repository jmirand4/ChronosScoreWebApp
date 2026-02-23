/**
 * Calcula a duração de uma secção em segundos.
 * @param {number} numBeats - Numerador (ex: 4 no 4/4)
 * @param {number} beatValue - Denominador (ex: 4 no 4/4)
 * @param {number} bpm - Batidas por minuto
 * @param {number} referenceNote - Nota de referência (4=Semínima, 8=Colcheia)
 * @param {number} totalMeasures - Quantidade de compassos
 */

export const calculateSeconds = (numBeats, beatValue, bpm, referenceNote, totalMeasures, dotted = false) => {
  if (!bpm || bpm <= 0) return 0;

  // Usamos a tua função de fator para saber a relação entre a pulsação e o compasso
  const factor = transformreferenceNoteIntoBeatValue(beatValue, referenceNote, dotted);

  // 1. Tempo de uma pulsação (ex: 120 BPM -> 0.5s por pulsação)
  const secondsPerPulse = 60 / bpm;
  
  // 2. Tempo de um compasso: 
  // (Tempo da pulsação / fator) * batidas por compasso
  const secondsPerMeasure = (secondsPerPulse / factor) * numBeats;

  return secondsPerMeasure * totalMeasures;
};

export const formatTime = (totalSeconds) => {
  const mins = Math.floor(totalSeconds / 60);
  const secs = Math.round(totalSeconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};


/**
 * Calcula quantas notas do tipo beatNote cabem em uma referenceNote.
 * Exemplo: quantas colcheias (8) cabem numa semínima pontuada (dotted 4)?
 * @param {number} beatNote - Denominador do compasso (ex: 8 para colcheia)
 * @param {number} referenceNote - Nota de referência (ex: 4 para semínima)
 * @param {boolean} dotted - Se a nota de referência é pontuada (opcional)
 * @returns {number}
 */
export const transformreferenceNoteIntoBeatValue = (beatNote, referenceNote, dotted = false) => {
  if (!beatNote || !referenceNote) return 0;

  // Valor base: quantas notas menores cabem na maior
  let factor = beatNote / referenceNote;

  // Se a nota de referência é pontuada, multiplica por 1.5
  if (dotted) {
    factor *= 1.5;
  }

  return factor;
}

