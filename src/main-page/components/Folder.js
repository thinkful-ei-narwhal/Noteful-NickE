import React from 'react';

export default class Folder extends React.Component {
  render() {
    return (
      <div className="folder" id={this.props.id}>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}