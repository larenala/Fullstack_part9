import patientData from '../../data/patients';

import { PatientEntry, NonSensitivePatientEntry, NewPatientEntry } from '../types/PatientEntry';

// const patients: Array<PatientEntry> = patientData;

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

const addEntry = (
  entry: NewPatientEntry
):PatientEntry => {
  const newPatientEntry = {
    id: "d27736ec-f723-11e9-8f0b-362b9e155667",
    ...entry
  };
  patientData.push(newPatientEntry);
  return newPatientEntry;
};


export default {
  getEntries,
  getNonSensitiveEntries,
  addEntry,
}