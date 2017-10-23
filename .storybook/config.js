
import React from 'react'
import {configure, addDecorator } from '@storybook/react'
import { ConnectedRouter } from 'react-router-redux';
import Header from '../src/header/index.js'
// import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from '../src/store.js';

const req = require.context('../stories', true, /\.js$/)

const layout = children => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <div style={{paddingTop: 100}}>
          {children}

        </div>
      </div>
    </ConnectedRouter>
  </Provider>
)

addDecorator(story => {
  return layout(story())
})

function loadStories() {
  req.keys().forEach(file => req(file))
}

configure(loadStories, module);
