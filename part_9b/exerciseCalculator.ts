interface Result {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number,
}

const calculateExercises = (target:number, hours: Array<number>):Result => {
  const reducer = (accumulator:number, item:number):number => {
    return accumulator + item
  }
  const exerciseHours = hours.reduce(reducer, 0)
  const days = hours.length
  const avgExerciseTime = exerciseHours / days
  const exerciseDays = hours.filter(h => h !== 0).length
  const targetReached = avgExerciseTime >= target

  let feedback:string 
  let rating:number
  if (targetReached) {
    rating = 3
    feedback = 'Excellent, you nailed it!'
  } else if (avgExerciseTime > target * 0.5) {
    rating = 2
    feedback = 'Good effort, but not quite there.'
  } else if (avgExerciseTime >= 0) {
    rating = 1
    feedback = 'Not your best week..'
  } else {
    throw new Error('Something went wrong here...')
  }
  return {
    periodLength: days,
    trainingDays: exerciseDays,
    success: targetReached,
    rating: rating,
    ratingDescription: feedback,
    target: target,
    average: avgExerciseTime,
  }
}

const parseArguments = (args:Array<string>) => {
  if (args.length < 3 ) {
    throw new Error('You must give at least two arguments.');
  } 
  const parsedArray:Array<number> = []
  for (let i=3; i<args.length; i++) {
    parsedArray.push(Number(args[i]))
  }
  return {
    targetNumber: Number(args[2]),
    exerciseTime: parsedArray
  }
}

try{
  const { targetNumber, exerciseTime } = parseArguments(process.argv)
  console.log(calculateExercises(targetNumber, exerciseTime))
} catch (e) {
  console.log('Error: ', e.message)
}
