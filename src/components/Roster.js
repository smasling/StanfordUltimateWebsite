import React from 'react';

export default function Roster(props) {
  console.log(props);
  const names = props.roster
    .sort((a, b) => {
      return a.split(' ')[1].localeCompare(b.split(' ')[1]);
    })
    .map(item => {
      return <li key={item}>{item}</li>;
    });
  return (
    <div>
      <ul>{names}</ul>
    </div>
  );
}
