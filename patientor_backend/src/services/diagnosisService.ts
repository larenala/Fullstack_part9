import diagnosisData from '../../data/diagnoses.json';

import { DiagnosisEntry } from '../types/DiagnosisEntry';

const diagnoses: Array<DiagnosisEntry> = diagnosisData;


const getEntries = ():Array<DiagnosisEntry> => {
  return diagnoses;
};

export default {
  getEntries
}