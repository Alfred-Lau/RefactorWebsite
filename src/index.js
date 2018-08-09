import React from 'react';
import ReactDOM from 'react-dom';
import { isDone } from './ts.ts'

import base from './css/base.less'

const app = document.getElementById('app')
app.innerHTML = `<div class="${base.box}"></div>`


class App extends React.Component{

  // componentDidMount() {
  //   let flag = false

  //   setInterval(function () {

  //     if (flag) {
  //       base.unuse()
  //     } else {
  //       base.use()
  //     }

  //     flag = !flag

  //   }, 1000);
  // }
  render() {
    return 'hello world'
  }
}

ReactDOM.render(
  <App> Hello, world! </App>,
  document.getElementById('root')
);
