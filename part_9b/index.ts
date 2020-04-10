import express = require('express');
import { calculateBmi } from './bmiCalculator';

const app = express();

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

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

