// @flow
import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs";

import { Progress } from "../src/index.js";
const stories = storiesOf("Progress", module);

stories.addDecorator(withKnobs);

stories.add("initial", () => (
  <Progress
    percent={number("Percent", 1, { range: true, min: 0, max: 100, step: 1 })}
  />
));
