import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button, Divider, Header, Container } from "semantic-ui-react";
import { apiBaseUrl } from "./constants";
import { useStateValue, setPatientList, setDiagnoses } from "./state";
import { Diagnosis, Patient } from "./types";
import PatientInfo from './components/PatientInfo';

import PatientListPage from "./PatientListPage";

const App: React.FC = () => {
  const [, dispatch] = useStateValue();
  React.useEffect(() => {
    axios.get<void>(`${apiBaseUrl}/patients/ping`);

    const fetchPatientList = async () => {
      try {
        const { data: patientListFromApi } = await axios.get<Patient[]>(
          `${apiBaseUrl}/patients`
        );
        dispatch(setPatientList(patientListFromApi));
      } catch (e) {
        console.error(e);
      }
    };
    fetchPatientList();
  }, [dispatch]);

  React.useEffect(() => {
    const fetchDiagnoses = async () => {
      try {
        const { data: diagnosisData } = await axios.get<Diagnosis[]>(
          `${apiBaseUrl}/diagnoses`
        );
        dispatch(setDiagnoses(diagnosisData));
      } catch (e) {
        console.error(e);
      }     
    };
    fetchDiagnoses();
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Container>
          <Header as="h1">Patientor</Header>
          <Button as={Link} to="/" primary>
            Home
          </Button>
          <Divider hidden />
          <Switch>
            <Route exact path="/" render={() => <PatientListPage />} />
            <Route exact path="/:id" render={() => <PatientInfo />} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
