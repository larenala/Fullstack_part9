import React from 'react';
import { Entry } from '../types';
import HealthRatingBar from './HealthRatingBar';
import { useStateValue } from '../state';
import {Container, Grid, Header, Icon} from 'semantic-ui-react';

const HealthCheckEntry: React.FC<{entry: Entry, rating: number}> = ({ entry, rating }) => {
  const [{ patients, diagnoses }, dispatch] = useStateValue();

  return (
    <Container className="ui segment raised">
      <Header>
        <strong>
          {entry.date}
          {' '}
          <Icon className="user md icon" />
        </strong>
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
      <HealthRatingBar showText={false} rating={rating} />
    </Container>
  )
};

export default HealthCheckEntry;