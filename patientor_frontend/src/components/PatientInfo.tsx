import React, {useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import {apiBaseUrl} from '../constants';
import {Patient, Entry} from '../types';
import AddEntryModal from '../AddEntryModal';
import { DiaryEntryFormValues } from '../AddEntryModal/DiaryEntryForm';
import { useStateValue, updatePatient } from "../state";
import EntryDetails from './EntryDetails';
import { Button, Icon, Segment } from 'semantic-ui-react';

const PatientInfo = () => {
  const { id } = useParams();
  const [{ patients, diagnoses }, dispatch] = useStateValue();
  const [error, setError] = React.useState<string | undefined>();
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };
  const history = useHistory();


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
    const patientEntries = patients[id].entries
  
  const submitNewEntry = async (values: DiaryEntryFormValues) => {
    try {
      const { data: newEntry } = await axios.post<Entry>(
        `${apiBaseUrl}/patients/${id}/entries`,
        values
      );
      const patient = patients[id];
      dispatch(updatePatient(patient));
      closeModal();
      history.push('/')
    } catch (e) {
      console.error(e.response.data);
      setError(e.response.data.error);
    }
  };

    return (
      <div className="patient-info">
        <h1>{patients[id].name} <Icon className={getGenderIcon()}></Icon></h1>
        <p>Ssn: {patients[id].ssn}</p>
        <p>Occupation: {patients[id].occupation}</p>
        <h2>Entries</h2>
        {patientEntries && patientEntries.map(entry => <EntryDetails key={entry.id} entry={entry} /> )}
        <Button onClick={() => openModal()}>Add New Entry</Button>
        <AddEntryModal
          modalOpen={modalOpen}
          onSubmit={submitNewEntry}
          error={error}
          onClose={closeModal}
        />
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
