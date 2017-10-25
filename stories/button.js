// @flow
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

import { Button } from "../src/index.js";
const stories = storiesOf("Button", module);

stories.addDecorator(withKnobs);

const colors = [
  "teal",
  "white",
  "black",
  "light-gray",
  "medium-gray",
  "dark-gray"
];

const sizes = ["medium", "small", "large"];

const statuses = ["none", "success", "error"];

stories.add("initial", () => (
  <Button
    onClick={action("clicked")}
    color={select("color", colors)}
    size={select("size", sizes)}
    status={select("statuses", statuses)}
    expanded={boolean("expanded")}
    centered={boolean("centered")}
  >
    {text("Label", "Hello Button")}
  </Button>
));
