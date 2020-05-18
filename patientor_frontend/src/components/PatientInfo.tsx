import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import {apiBaseUrl} from '../constants'
import {Patient} from '../types'
import { useStateValue, updatePatient } from "../state";
import { Icon } from 'semantic-ui-react';

const PatientInfo = () => {
  const { id } = useParams();
  const [{ patients }, dispatch] = useStateValue();

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
  }, [dispatch]);

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
        {Object.values(patientEntries).map(entry => {
          switch(entry.type) {
            case "HealthCheck": 
              return (
                <div>
                  <p><strong>{entry.date}</strong></p>
                  <p><em>{entry.description}</em></p>
                  <ul>
                    {entry.diagnosisCodes && 
                      Object.values(entry.diagnosisCodes).map((e:any) => <li>{e}</li>
                    )}
                  </ul>
                  <br />
                </div>
              );
            case "Hospital": 
              return (
                <div>
                  <p><strong>{entry.date}</strong></p>
                  <p><em>{entry.description}</em></p>
                  <ul>
                    {entry.diagnosisCodes && 
                      Object.values(entry.diagnosisCodes).map((e:any) => <li>{e}</li>
                    )}
                  </ul>
                  <br />
                </div>
              );
            case "OccupationalHealthCare":
              return(
                <div>
                  <p><strong>{entry.date}</strong></p>
                  <p><em>{entry.description}</em></p>
                  <ul>
                    {entry.diagnosisCodes && 
                      Object.values(entry.diagnosisCodes).map((e:any) => <li>{e}</li>
                    )}
                  </ul>
                  <br />
                </div>
              );
            default:
              break;
          }           
          }
        )}
      </div>
    );
    } else {
      return (
        <div>
          <p>wrong id</p>
        </div>
      )
    }
};

export default PatientInfo;
