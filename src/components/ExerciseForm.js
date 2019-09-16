import React, { useState } from 'react';
import { Modal, Scrim } from './styles';
import Select from 'react-select';

export default function ExerciseForm(props) {
  const exerciseRef = React.createRef();
  const weightRef = React.createRef();
  const setsRef = React.createRef();
  const repsRef = React.createRef();
  const formRef = React.createRef();
  const dateRef = React.createRef();
  const ref = React.createRef();

  const sendOne = () => {
    addAnother();
    const toSend = logArr.filter(item => {
      return (
        item.name !== '' &&
        item.reps !== '' &&
        item.sets !== '' &&
        item.weight !== ''
      );
    });
    console.log(toSend);
    //props.sendLog(logArr);
  };

  let [ex, setEx] = useState('');
  let [logArr, updateLogArr] = useState([]);

  const opts = props.exercises.map(item => {
    return { value: item, label: item };
  });
  console.log(ex);

  let selectVariable = (
    <Select
      options={opts}
      onChange={val => setEx(val.value)}
      value={[{ value: ex, label: ex }]}
      closeMenuOnSelect={true}
      ref={ref}
      key={ex}
    />
  );

  if (ref.current) console.log(ref.current.state);

  const addAnother = e => {
    // e.preventDefault();
    console.log(ref.current.state);

    const log = {
      name: ex,
      reps: repsRef.current.value,
      sets: setsRef.current.value,
      weight: weightRef.current.value
    };
    formRef.current.reset();
    setEx('');

    // console.log(ref.current.state);

    logArr.push(log);
    updateLogArr(logArr);
  };

  const variable = (
    <>
      <label>
        Exercise Name
        {selectVariable}
      </label>
      <label>
        Weight
        <input ref={weightRef} type="text" />
      </label>
      <label>
        Sets
        <input ref={setsRef} type="text" />
      </label>
      <label>
        Reps
        <input ref={repsRef} type="text" />
      </label>
    </>
  );

  return (
    <>
      <Scrim onClick={props.reset} />
      <Modal>
        <label>
          Date
          <input ref={dateRef} type="date" />
        </label>
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          ref={formRef}
          // onSubmit={sendOne}
        >
          {variable}
        </form>
        <button onClick={sendOne}>Post workout</button>

        <button onClick={addAnother}>Add another exercise</button>
      </Modal>
    </>
  );
}
