import React from 'react';
import './Folder.css'

export default class Folder extends React.Component {
  render() {
    return (
      <div className={this.props.highlightTarget ? "folder-highlighted" : "folder"} id={this.props.id}>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}