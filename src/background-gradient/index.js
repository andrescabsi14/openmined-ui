import React from 'react';
import cn from 'classnames'
import './background-gradient.css';

const BackgroundGradient = ({
  animated,
  className
}) => {
  const classes = cn(
    'background-gradient',
    'animated',
    className
  )
  return <div className={classes} />
};

export default BackgroundGradient;
