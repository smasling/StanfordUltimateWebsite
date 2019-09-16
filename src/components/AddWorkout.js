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

    // if (props.data[props.name]) {
    //   const ents = Array.from(props.data[props.name]['entries']);
    //   for (let i = 0; i < ents.length; i++) {
    //     if (ents[i].date === dateRef.current.value) {
    //       temp[props.name]['entries'][i].exercises.push(logItem);
    //       props.addLog(temp);
    //       formRef.current.reset();
    //       break;
    //     }
    //   }
    // }
  };

  const reset = () => setButton(false);

  if (button) {
    return (
      <ExerciseForm
        reset={reset}
        exercises={props.exercises}
        sendLog={sendLog}
      />
    );
  } else {
    return <button onClick={() => setButton(true)}> Log New Workout</button>;
  }
}
