import {DiagnosisEntry} from './DiagnosisEntry'

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}

interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<DiagnosisEntry['code']>;
}

interface OccupationalHealthCare extends BaseEntry {
  type: "OccupationalHealthCare";
  employerName: string;
  sickLeave?: {
    startDate: string;
    endDate: string;
  }
}

interface Hospital extends BaseEntry {
  type: "Hospital",
  discharge: {
    date: string;
    criteria: string;
  }
}

interface HealthCheck extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}

export type Entry =
  | Hospital
  | OccupationalHealthCare
  | HealthCheck

export interface PatientEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn?: string;
  gender: Gender;
  occupation: string;
  entries?: Entry[];
};

export type NonSensitivePatientEntry = Omit<PatientEntry, 'ssn'>;
export type NewPatientEntry = Omit<PatientEntry, 'id'>;
export type PublicPatient = Omit<PatientEntry, 'ssn' | 'entries' >;