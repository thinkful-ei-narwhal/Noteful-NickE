import React from 'react';

export default class Note extends React.Component {

  render() {
    // "id"
    // "name"
    // "modified"
    // "folderId"
    // "content"

    // >>CLICKING ON THE CAR WILL SHOW THIS IN A SEPARATE COMPONENT BELOW
    //  {/* <p>{this.props.content}</p> >> ONLY IF OPEN */}

    const date = new Date(this.props.modified);
    const dayOfMonth = date.getUTCDate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthString = months[date.getMonth()];
    const year = date.getUTCFullYear();
    let dateInHuman = `${dayOfMonth} ${monthString} ${year}`;
    return (
      < div className="note" id={this.props.id} >
        <h3>{this.props.name}</h3>
        <p>Date modified on {dateInHuman}</p>
        <button>Delete Note</button>
      </div >
    );
  }
}