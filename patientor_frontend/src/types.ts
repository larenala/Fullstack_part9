export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
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
  diagnosisCodes?: Array<Diagnosis['code']>;
}

export interface OccupationalHealthCare extends BaseEntry {
  type: "OccupationalHealthCare";
  employerName: string;
  sickLeave?: {
    startDate: string;
    endDate: string;
  }
}

export interface Hospital extends BaseEntry {
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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type Entry =
  | Hospital
  | OccupationalHealthCare
  | HealthCheck

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
  entries: Entry[];
}
