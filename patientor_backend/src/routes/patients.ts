import express from 'express';
import patientService from '../services/patientService';
import { toNewPatientEntry } from '../utils/toNewPatientEntry';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getNonSensitiveEntries());
});

router.get('/ping', (__req, res) => {
  console.log('Pinged')
  res.send('pong');
});

router.get('/:id', (req, res) => {
  res.send(patientService.getWithJournalEntries(req.params.id));
});

router.post('/', (req, res) => {
  try {
    const newPatientEntry  = toNewPatientEntry(req.body);
    const addedEntry = patientService.addEntry(newPatientEntry);
    res.json(addedEntry);
  } catch (e) {
    res.status(400).send(e.message);
  }
  
});

router.post('/:id/entries', (req, res) => {
  const { id } = req.params;
  const entry = req.body;

  try {
    const updated = patientService.updateEntry(id, entry);
    res.json(updated);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

export default router;