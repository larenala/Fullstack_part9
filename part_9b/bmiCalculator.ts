export const calculateBmi = (height: number, weight: number):string => {
  const heightToUse = height / 100;
  const bmi = weight / (heightToUse ^2);
  switch (true) {
    case (bmi > 0 && bmi < 15): 
      return 'Very severely underweight';
    case (bmi >= 15 && bmi < 16):
      return 'Severely underweight';
    case (bmi >= 16 && bmi < 18.5): 
      return 'Underweight';
    case (bmi >= 18.5 && bmi < 25):
      return 'Normal (healthy) weight';
    case (bmi >= 25 && bmi < 30): 
      return 'Overweight';
    case (bmi >= 30 && bmi < 35): 
      return 'Moderately obese';
    case (bmi >= 35 && bmi < 40): 
      return 'Severely obese';  
    case (bmi >= 40 && bmi < 106): 
      return 'Very severely obese';
    default:
      return 'Give a real weight and height'; 
  }
};

console.log(calculateBmi(180, 74));