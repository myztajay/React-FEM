/* global React ReactDOM */
import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './NewTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
    <div>
      <MyTitle title="props are cool" color='rebeccapurple' />
      <MyTitle title="props are cool" color='mediumaquamarine'/>
      <MyTitle title="props are cool" color='peru'/>
    </div>
    )
  }
})
ReactDOM.render(React.createElement(MyFirstComponent),
document.getElementById('app'))
