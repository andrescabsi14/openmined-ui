import React from 'react'
import cn from 'classnames'
import './input.css'

const Button = ({
  children,
  className,
  ...otherProps
}) => {

  const classes = cn(
    className
  )
  return (
    <input className={classes} {...otherProps}>
      {children}
    </input>
  );
};

export default Button;
