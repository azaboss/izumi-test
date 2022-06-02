import React from 'react';
import {TextField} from '@mui/material';
import styles from './input.module.scss'
const Input = (props) => {
  return (
    <TextField {...props} className={styles.input} placeholder='Input anime name' fullWidth type='search'/>
  );
}

export default Input;