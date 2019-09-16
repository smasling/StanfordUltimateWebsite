import React from 'react';
import { Link } from 'react-router-dom';

const returnDate = function(str) {
  let day = new Date();
  day = day.setMonth(str.split('/')[0] - 1);
  day = new Date(day).setDate(str.split('/')[1]);
  day = new Date(day).setFullYear(parseInt(str.split('/')[2]) + 2000);
  return new Date(day);
};

export default function Player(props) {
  const entries = props.entries.sort((a, b) => {
    return returnDate(a.date) >= returnDate(b.date);
  });

  return (
    <>
      <div>
        <p> {props.name}</p>
        <Link to={'/player/' + props.name}>See past history</Link>
        <div>
          <p>{entries[0].date}</p>
          <ul>
            {entries[0].exercises.map(item => {
              return (
                <li key={item.name + props.name}>
                  {item.name}{' '}
                  <span>
                    {item.sets}x{item.reps}x{item.weight}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
