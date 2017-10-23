import React from 'react';
import cn from 'classnames'
import './heading.css'

const Heading = ({
  level,
  className,
  children,
  notCapped,
  ...otherProps
}) => {

  const classes = cn(
    className,
    'heading',
    {'not-capped': notCapped}
  )
  const Tag = `h${level}`
  return (
    <Tag className={classes} {...otherProps}>
      {children}
    </Tag>
  );
};

export default Heading;
