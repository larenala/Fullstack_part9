import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import {apiBaseUrl} from '../constants'
import {Patient} from '../types'
import { useStateValue, updatePatient } from "../state";
import EntryDetails from './EntryDetails';
import { Icon } from 'semantic-ui-react';

const PatientInfo = () => {
  const { id } = useParams();
  const [{ patients, diagnoses }, dispatch] = useStateValue();

  useEffect(() => {
    const fetchSinglePatient = async () => {
      try {
        const { data: patientDetails } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );
        dispatch(updatePatient(patientDetails));
      } catch (e) {
        console.error(e);
      }
    };
    fetchSinglePatient();  
  }, [dispatch, id]);

  const getGenderIcon = ():string | undefined => {
    let icon = "genderless";
    if (id && patients[id]) {
      patients[id].gender === "female" ? icon = "venus" : icon = "mars";
    };
    return icon;
  }

  if (id && patients[id]) {
    const patientEntries = patients[id].entries[0]

    return (
      <div className="patient-info">
        <h1>{patients[id].name} <Icon className={getGenderIcon()}></Icon></h1>
        <p>Ssn: {patients[id].ssn}</p>
        <p>Occupation: {patients[id].occupation}</p>
        <h2>Entries</h2>
        {Object.values(patientEntries).map(entry => <EntryDetails entry={entry} /> )}   
      </div>
    );
    } else {
      return (
        <div>
          <p>Wrong id</p>
        </div>
      )
    }
};

export default PatientInfo;
