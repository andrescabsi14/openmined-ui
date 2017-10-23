
import React from 'react'
import {configure, addDecorator } from '@storybook/react'
import { ConnectedRouter } from 'react-router-redux';
import Header from '../src/header/index.js'
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from '../src/store.js';

const req = require.context('../stories', true, /\.js$/)

// TODO: Wrap with redux and router
// const provider = children => (
//   <Provider store={store}>
//     {children}
//   </Provider>
// )
//
// const router = children => (
//   <ConnectedRouter history={history}>
//     <div>
//       <Route path='/' component={children} />
//     </div>
//   </ConnectedRouter>
// )
//
// const layout = children => (
//   <div>
//     <Header />
//     {children}
//   </div>
// )
//
// addDecorator(story => provider(router(layout(story()))))

function loadStories() {
  req.keys().forEach(file => req(file))
}

configure(loadStories, module);
