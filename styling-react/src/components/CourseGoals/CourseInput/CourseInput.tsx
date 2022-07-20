import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';
import styled from "styled-components";

const FormControl = styled.div<{invalid: boolean}>`

  margin: 0.5rem 0;

  & label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.invalid ? 'red' : 'black'};
  }

  & input {
  display: block;
  width: 100%;
  border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
  background: ${props => props.invalid ? '#ffd7d7' : 'transparent'};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

 & input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

`;

const CourseInput: React.FC<{onAddGoal: (arg0: string) => void}> = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setIsValid(true);
    setEnteredValue(event.currentTarget.value);
  };

  const formSubmitHandler =  (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
