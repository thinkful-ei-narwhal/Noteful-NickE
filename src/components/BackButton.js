import React from 'react';

export default class BackButton extends React.Component {

  render() {
    return (
      <button onClick={() => this.props.history.push('/')} >Go back</button>
    );
  }
}