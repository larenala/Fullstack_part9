import patientData from '../../data/patients.json';

import { PatientEntry, NonSensitivePatientEntry } from '../types/PatientEntry';

const getEntries = ():Array<NonSensitivePatientEntry> => {
  return patientData;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry [] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};


export default {
  getEntries,
  getNonSensitiveEntries,
}