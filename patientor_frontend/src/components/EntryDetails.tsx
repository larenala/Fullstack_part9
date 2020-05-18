import React from 'react';
import {Entry} from '../types'
import HospitalEntry from './HospitalEntry';
import HealthCheckEntry from './HealthCheckEntry';
import OccupationalHealthCareEntry from './OccupationalHealthCareEntry';

const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
  
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

    switch(entry.type) {
      case "HealthCheck": 
        return <HealthCheckEntry entry={entry} rating={entry.healthCheckRating}/>
      case "Hospital": 
        return <HospitalEntry entry={entry} discharge={entry.discharge} />
      case "OccupationalHealthCare":
        return <OccupationalHealthCareEntry entry={entry} sickleave={entry.sickLeave} />
      default:
        return assertNever(entry);
    }           
};

export default EntryDetails;
