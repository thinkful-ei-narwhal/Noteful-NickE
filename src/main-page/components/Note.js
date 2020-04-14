import React from 'react';

export default class Note extends React.Component {

  render() {
    // "id"
    // "name"
    // "modified"
    // "folderId"
    // "content"
    return (
      <div className="note" id={this.props.id} >
        <h3>{this.props.name}</h3>
        <p>{this.props.content}</p>
        <button>Delete Note</button>
      </div>
    );
  }
}