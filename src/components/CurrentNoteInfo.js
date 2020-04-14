import React from 'react';

export default class CurrentNoteInfo extends React.Component {

  render() {
    // "content"

    // >>CLICKING ON THE CAR WILL SHOW THIS IN A SEPARATE COMPONENT BELOW
    //  {/* <p>{this.props.content}</p> >> ONLY IF OPEN */}

    return (
      < div className="note-conent" id={this.props.id} >
        <p>{this.props.content}</p>
      </div >
    );
  }
}