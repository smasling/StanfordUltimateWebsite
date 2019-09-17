import React from 'react';
import AddWorkout from './AddWorkout';
import AddExcercise from './AddExcercise';

const returnDate = function(str) {
  let day = new Date();
  day = day.setMonth(str.date.split('/')[0] - 1);
  day = new Date(day).setDate(str.date.split('/')[1]);
  day = new Date(day).setFullYear(parseInt(str.date.split('/')[2]) + 2000);
  return new Date(day);
};

export default function PlayerData(props) {
  const h = props.data[props.match.params.name];

  const entries = h.entries.sort((a, b) => {
    return returnDate(a) >= returnDate(b);
  });

  const exercises = entries.map(ent => {
    if (ent.exercises) {
      return (
        <div key={h.name + ent.date}>
          <p>{ent.date}</p>
          <ul>
            {ent.exercises.map(item => {
              return (
                <li key={item.sets * Math.random()}>
                  {item.name}{' '}
                  <span>
                    {item.sets}x{item.reps}x{item.weight}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  });

  return (
    <>
      <AddWorkout
        exercises={props.exercises}
        data={props.data}
        addLog={props.addLog}
        name={props.match.params.name}
      ></AddWorkout>
      <div>{props.match.params.name}</div>
      <div>{exercises}</div>

      <AddExcercise addExercise={props.addExercise} />
    </>
  );
}
