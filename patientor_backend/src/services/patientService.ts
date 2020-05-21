import patientData from '../../data/patients';

import { PatientEntry, NonSensitivePatientEntry, NewPatientEntry, Entry } from '../types/PatientEntry';
import patientEntries from '../../data/patients';

// const patients: Array<PatientEntry> = patientData;

const getEntries = ():Array<PatientEntry> => {
  return patientData;
};

const getWithJournalEntries = (id: string): PatientEntry | undefined => {
  return patientData.find(patient => patient.id === id);
}

const getNonSensitiveEntries = (): NonSensitivePatientEntry [] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries,
  }));
};

const addEntry = (
  entry: NewPatientEntry
):PatientEntry => {
  const newPatientEntry = {
    id: Math.random().toString(36).slice(2),
    ...entry
  };
  patientData.push(newPatientEntry);
  return newPatientEntry;
};

const updateEntry = (id: string, entry: Entry): PatientEntry | undefined => {
  const patient = Object.values(patientData).find(p => p.id === id)
  
  if (patient && patient.entries ) {
    const id = patient.id
    const updatedEntries = patient.entries.concat(entry)
    patient.entries = updatedEntries
  } 
  return patient;
}

export default {
  getEntries,
  getNonSensitiveEntries,
  addEntry,
  getWithJournalEntries,
  updateEntry
}