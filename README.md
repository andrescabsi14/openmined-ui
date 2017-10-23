# OpenMined UI

# BIG OL' DISCLAIMER
### If you happen to find this while this message remains, please disregard structure and testing requirements- they will be improved!
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Chat on Slack](https://img.shields.io/badge/chat-on%20slack-7A5979.svg)](https://openmined.slack.com/messages/team_uiux)


> Because data science should look good.

Welcome to the OpenMined UI libary!  The purpose of this is to give UI developers one design language in the creation of OpenMined applications.  In the same way that our code repositories should constantly be improving, it should also be assumed that this file is a working document that will change and improve over time.  Below are a list of guidelines for how various user interface elements should be used throughout the visual design of the OpenMined ecosystem.  We encourage you to use them at will and suggest new ones in the #team_uiux channel in Slack.  Please note that it is imperative that you always consult the OpenMined brand manual first as it is the ultimate source of truth for remaining true to the brand.

## Setup

### Prerequisites
```
node >= 8
```

### Installation

```sh
yarn add omui
```


## Usage

```js
import React, {Component} from 'react'
import {Button} from 'omui'

export default class ComponentWithButton extends Component {
  render () {
    return <Button>Click Here!</Button>
  }
}

```

## Development

```sh
yarn
yarn build-storybook
yarn storybook
```

From there, storybook should hot reload with any change. You may need to restart when adding new files.

## License

[Apache-2.0](LICENSE) by OpenMined contributors
