import React from 'react';
import Note from './Note'
import AddNote from './AddNote'

export default class NoteList extends React.Component {
  render() {
    const notes = this.props.notes.map(note => {
      return <Note key={note.id} noteId={note.id} name={note.name} modified={note.modified} folderId={note.folderId} content={note.content} />
    });

    return (
      <div>
        <h2>Notes</h2>
        {notes}
        {/* Make the add note button appear below all of the notes */}
        <AddNote />
      </div>
    );
  }
}