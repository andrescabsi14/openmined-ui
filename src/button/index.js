// @flow
import * as React from "react";
import cn from "classnames";
import "./index.css";

type DefaultProps = {
  size: "small" | "medium" | "large",
  color:
    | "light-gray"
    | "medium-grey"
    | "dark-gray"
    | "black"
    | "white"
    | "teal",
  expanded: boolean,
  centered: boolean
};

type Props = DefaultProps & {
  children: React.Node,
  className?: string,
  status?: "error" | "success"
};

const Button = ({
  children,
  size = "medium",
  color = "teal",
  status,
  expanded = false,
  centered = false,
  className,
  ...otherProps
}: Props) => {
  const classes = cn(className, size, color, status, {
    expanded,
    centered
  });
  return (
    <button className={classes} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
