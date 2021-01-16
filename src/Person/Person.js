import React from 'react';
import classes from './Person.module.css';

const Person = (props) => {

  return (
    <div className={classes.person}>
      <p onClick={props.personClicked}>
        I'm a {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
