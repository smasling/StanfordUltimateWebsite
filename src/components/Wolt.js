import React from 'react';
import Player from './Player';

export default class Wolt extends React.Component {
  render() {
    const people = Object.keys(this.props.data).map(ent => {
      const entry = this.props.data[ent];
      console.log(entry.entries, ent);
      return <Player key={ent} name={ent} entries={entry.entries} />;
    });

    return (
      <>
        <div>{people}</div>
      </>
    );
  }
}
