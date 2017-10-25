// @flow
import * as React from "react";
import cn from "classnames";
import "./index.css";

type DefaultProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
};

type Props = DefaultProps & {
  className?: string,
  children?: React.Node,
  notCapped?: boolean
};
const Heading = ({
  level = 3, // TODO: Determine if this is the right default
  className,
  children,
  notCapped,
  ...otherProps
}: Props) => {
  const classes = cn(className, "heading", { "not-capped": notCapped });
  const Tag = `h${level}`;
  return (
    <Tag className={classes} {...otherProps}>
      {children}
    </Tag>
  );
};

export default Heading;
