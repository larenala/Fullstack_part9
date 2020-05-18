import { NewPatientEntry, Gender, Entry } from '../types/PatientEntry';

/* eslint-disable @typescript-eslint/no-explicit-any */
  const isString = (text:any): text is string => {
    return typeof text === 'string' || text instanceof String;
  };

  const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
  };

  const parseString = (text:any): string => {
    if (!text || !isString(text)) {
      throw new Error('Incorrect or missing value: ' + text);
    };
    return text;
  };

  const parseDate = (date: any): string => {
    if (!date || !isString(date) || !isDate(date)) {
      throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
  };

  const isGender = (param:any): param is Gender => {
    return Object.values(Gender).includes(param);
  };

  const parseGender = (gender: any): Gender => {
    if(!gender || !isGender(gender)) {
      throw new Error('Incorrect or missing gender ' + gender);
    };
    return gender;
  };

  const isEntry = (param:any): param is Entry => {
    if (param.type === "Hospital" || param.type === "HealthCheck" || param.type === "OccupationalHealthCare") {
      return true;
    }
    return false;
  };

  const parseEntry = (entry: any): Entry => {
    if (entry && !isEntry) {
      throw new Error('Incorrect entry.');
    }
    return entry;
  }

export const toNewPatientEntry = (object:any): NewPatientEntry => {
  return {
    name: parseString(object.name),
    dateOfBirth: parseDate(object.dateOfBirth),
    ssn: parseString(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseString(object.occupation),
    entries: [parseEntry(object.entries)]
  };
};
