import React, { useState } from 'react';
import { Modal, Scrim } from './styles';
import Select from 'react-select';

export default function ExerciseForm(props) {
  const exerciseRef = React.createRef();
  const weightRef = React.createRef();
  const setsRef = React.createRef();
  const repsRef = React.createRef();
  const formRef = React.createRef();
  const textRef = React.createRef();
  const dateRef = React.createRef();

  const sendOne = e => {
    e.preventDefault();
    props.sendLog(logArr);
  };
  let [sel, setSelect] = useState(null);
  let [logArr, updateLogArr] = useState([]);

  const filterExercise = () => {
    setSelect(textRef.current.value);
  };

  const exercises = props.exercises.filter(item => {
    return sel ? item.toLowerCase().includes(sel.toLowerCase()) : true;
  });

  const opts = exercises.map(item => {
    return { value: item, label: item };
  });

  const selectVariable = (
    <Select options={opts} closeMenuOnSelect={false} ref={textRef} />
  );

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
          onSubmit={sendOne}
        >
          {variable}
        </form>
        <button>Submit</button>
      </Modal>
    </>
  );
}
