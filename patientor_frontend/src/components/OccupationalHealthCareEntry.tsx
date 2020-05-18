import React from 'react';
import { OccupationalHealthCare } from '../types';
import { useStateValue } from '../state';
import {Container, Header, Grid, Icon} from 'semantic-ui-react';

const OccupationalHealthCareEntry: React.FC<{ entry: OccupationalHealthCare, sickleave: Object | undefined }> = ({ entry, sickleave }) => {
  const [{ diagnoses, patients }, dispatch] = useStateValue();
  return(
    <Container className="ui segment raised">
      <Header>
        <span>
          <strong>
            {entry.date} 
            {' '}
            <Icon className="stethoscope" />
            {' '}
            {entry.employerName}
          </strong>
        </span>
      </Header>
      <p>{entry.specialist}</p>
      <p><em>{entry.description}</em></p>
      {sickleave && 
        <p>Sick leave from {Object.values(sickleave)[0]} to {Object.values(sickleave)[1]}</p>
      }
      <ul>
        {entry.diagnosisCodes && 
          diagnoses &&
          Object.values(entry.diagnosisCodes).map((e:any) => {
            if (diagnoses[e])
              return <li key={e}>{e} {diagnoses[e].name}</li>
            return null;
          }
        )}
      </ul>
    </Container>
  )
};

export default OccupationalHealthCareEntry;