import express = require('express');
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    try {
        const height = Number(req.query.height);
        const weight = Number(req.query.weight);
        if (isNaN(height) || isNaN(weight)) {
            res.json({ error: 'malformatted parameters' });
        }
        const bmi = calculateBmi(height, weight);
        res.json({
            height,
            weight,
            bmi,
        });
    } catch(e) {
        console.log(e);
    }  
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.post('/exercises', (req : any, res) => {
    const exercisesDone = req.body;
    if (!exercisesDone.daily_exercises || !exercisesDone.target) {
        res.json({error: 'parameters missing'});
    }
    const hours = exercisesDone.daily_exercises;
    const target = Number(exercisesDone.target);
    
    for (let i=0; i<hours.length; i++) {
        const hoursPerDay = Number(hours[i]);
        if (isNaN(hoursPerDay)) {
            res.json({error: 'malformatted parameters'});
        }
    }

    if (isNaN(target)) {
        res.json({error: 'malformatted parameters'});
    }
    
    res.json(calculateExercises(target, hours));
});


const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

