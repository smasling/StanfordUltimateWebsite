import React, { useState } from 'react';
import ExerciseForm from './ExerciseForm';

export default function AddWorkout(props) {
  const [button, setButton] = useState(false);

  const sendLog = function(item) {
    let temp = props.data;
    temp[props.name]['entries'].push({
      date: item.date,
      exercises: item.exercises
    });
    props.addLog(temp);
  };

  const reset = () => setButton(false);

  if (button) {
    return (
      <ExerciseForm
        reset={reset}
        exercises={props.exercises}
        sendLog={sendLog}
        close={() => setButton(false)}
      />
    );
  } else {
    return <button onClick={() => setButton(true)}> Log New Workout</button>;
  }
}
