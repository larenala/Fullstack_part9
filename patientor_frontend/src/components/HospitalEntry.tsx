import React from 'react';
import {Entry} from '../types';
import {useStateValue} from '../state';
import {Container, Header, Icon} from 'semantic-ui-react';

const HospitalEntry: React.FC<{entry: Entry, discharge: Object }> = ({ entry, discharge }) => {
  const [{ patients, diagnoses }, dispatch] = useStateValue();
  return (
    <Container className="ui segment raised">
      <Header>
        <span>
          <strong>
            {entry.date}{' '}
            <Icon className="hospital" />
          </strong> 
        </span>
      </Header>
      <p>{entry.specialist}</p>
      <p><em>{entry.description}</em></p>

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
    {discharge &&
      <p>Patient discharged on {Object.values(discharge)[0]}. {Object.values(discharge)[1]}.</p>
    }
    </Container>
  )
};

export default HospitalEntry;