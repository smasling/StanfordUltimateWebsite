import React, { useState } from 'react';
import { Modal, Scrim, Form } from './styles';
import Select from 'react-select';

export default function ExerciseForm(props) {
  const weightRef = React.createRef();
  const setsRef = React.createRef();
  const repsRef = React.createRef();
  const formRef = React.createRef();
  const dateRef = React.createRef();
  const ref = React.createRef();

  const sendOne = e => {
    e.preventDefault();
    addAnother();
    const toSend = logArr.filter(item => {
      return (
        item.name !== '' &&
        item.reps !== '' &&
        item.sets !== '' &&
        item.weight !== ''
      );
    });
    updateLogArr([]);
    if (toSend.length > 0) {
      props.sendLog({
        exercises: toSend,
        date: dateRef.current.value
      });
    }
    props.reset();
  };

  let [ex, setEx] = useState('');
  let [logArr, updateLogArr] = useState([]);

  const opts = props.exercises.map(item => {
    return { value: item, label: item };
  });

  const addAnother = e => {
    const log = {
      name: ex,
      reps: repsRef.current.value,
      sets: setsRef.current.value,
      weight: weightRef.current.value
    };
    formRef.current.reset();
    setEx('');

    logArr.push(log);
    updateLogArr(logArr);
  };

  const close = () => {
    formRef.current.reset();
    setEx('');
    props.reset();
  };

  const variable = (
    <>
      <label>
        Exercise Name
        <Select
          options={opts}
          onChange={val => setEx(val.value)}
          value={[{ value: ex, label: ex }]}
          closeMenuOnSelect={true}
          ref={ref}
          key={ex}
          styles={{ width: '800px' }}
        />
      </label>
      <label>
        Weight
        <input required ref={weightRef} type="text" />
      </label>
      <label>
        Sets
        <input required ref={setsRef} type="text" />
      </label>
      <label>
        Reps
        <input required ref={repsRef} type="text" />
      </label>
    </>
  );

  return (
    <>
      <Scrim onClick={close} />
      <Modal>
        <label>
          Date
          <input ref={dateRef} type="date" />
        </label>
        <Form
          style={{ display: 'flex', flexDirection: 'column' }}
          ref={formRef}
          onSubmit={sendOne}
        >
          {variable}
          <button type="submit">Post workout</button>
        </Form>

        <button onClick={addAnother}>Add another exercise</button>
      </Modal>
    </>
  );
}
