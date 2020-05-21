import React from 'react';
import { Field, Formik, Form } from "formik";
import {HealthCheck as HealthCheckEntry, HealthCheckRating} from '../types';
import { TextField, NumberField, DiagnosisSelection } from "../AddPatientModal/FormField";
import { Grid, Button, Form as FormField } from 'semantic-ui-react';
import { useStateValue } from "../state";


export type HealthCheckRatingOption = {
  value: HealthCheckRating;
  label: string;
};

export type DiaryEntryFormValues = Omit<HealthCheckEntry, 'id'>;

interface Props {
  onSubmit: (values: DiaryEntryFormValues) => void;
  onCancel: () => void;
}

const DiaryEntryForm: React.FC<Props> = ({ onSubmit, onCancel }) => {
  const [{ diagnoses }] = useStateValue()

  return (
    <Formik
      initialValues={{
        date: "",
        type: "HealthCheck",
        description: "",
        specialist: "",
        diagnosisCodes: [],
        healthCheckRating: 0,
      }}
      onSubmit={onSubmit}
      validate={values => {
        const requiredError = "Field is required";
        const errors: { [field: string]: string } = {};
        if (!values.date) {
          errors.date = requiredError;
        }
        if (!values.description) {
          errors.description = requiredError;
        }
        if (!values.specialist) {
          errors.specialist = requiredError;
        }
        return errors;
      }}
    >
      {({ isValid, dirty, handleReset, setFieldValue, setFieldTouched }) => {
        return (
          <Form className="form ui">
            <Field
              label="Date"
              placeholder="YYYY-MM-DD"
              name="date"
              component={TextField}
            />
            <Field
              label="Description"
              placeholder="Description"
              name="description"
              component={TextField}
            />
            <Field
              label="Specialist"
              placeholder="Specialist"
              name="specialist"
              component={TextField}
            />
            <Field
              label="healthCheckRating"
              name="healthCheckRating"
              component={NumberField}
              min={0}
              max={3}
            />
            <DiagnosisSelection
              setFieldValue={setFieldValue}
              setFieldTouched={setFieldTouched}
              diagnoses={Object.values(diagnoses)}
            />    

            <Grid>
              <Grid.Column floated="left" width={5}>
                <Button type="button" onClick={() => handleReset()} color="red">
                  Cancel
                </Button>
              </Grid.Column>
              <Grid.Column floated="right" width={5}>
                <Button
                  type="submit"
                  floated="right"
                  color="green"
                  disabled={!dirty || !isValid}
                >
                  Add
                </Button>
              </Grid.Column>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default DiaryEntryForm;