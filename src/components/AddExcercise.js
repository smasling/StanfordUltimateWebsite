import React from 'react';

export default function AddExcercise(props) {
  const formRef = React.createRef();
  const nameRef = React.createRef();
  const addExercise = e => {
    e.preventDefault();
    props.addExercise(nameRef.current.value);
    formRef.current.reset();
  };

  return (
    <>
      <p>Can't find your exercise in the list? Add it to the database</p>
      <form ref={formRef} onSubmit={addExercise}>
        <label>
          Excercise Name: <input ref={nameRef} type="text"></input>
        </label>
        <button type="submit">Add Exercise</button>
      </form>
    </>
  );
}
