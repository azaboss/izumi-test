import React from 'react';
import {Button} from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import styles from './button.module.scss'
const CustomButton = (props) => {
  return (
    <Button variant="text" className={styles.btn} {...props} endIcon={<ArrowCircleRightOutlinedIcon/>}/>
  );
}

export default CustomButton;