import React from 'react';
import cn from 'classnames'
import './buttons.css'

const Button = ({
  children,
  size,
  color,
  status,
  expanded,
  centered
}) => {

  const classes = cn(
    size,
    color,
    status,
    {
      expanded,
      centered
    }
  )
  return (
    <button className={classes}>
      {children}
    </button>
  );
};

export default Button;
