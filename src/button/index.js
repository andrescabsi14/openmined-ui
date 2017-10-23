import React from 'react';
import cn from 'classnames'
import './buttons.css'

const Button = ({
  children,
  size,
  color,
  status,
  expanded,
  centered,
  className,
  ...otherProps
}) => {

  const classes = cn(
    className,
    size,
    color,
    status,
    {
      expanded,
      centered
    }
  )
  return (
    <button className={classes} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
