import React from 'react';
import Note from './Note'
import AddNote from './AddNote'
import { Link } from 'react-router-dom';

export default class NoteList extends React.Component {
  render() {
    const notes = this.props.notes.map(note => {
      return <Link key={note.id} to={`/note/${note.id}`}><Note noteId={note.id} name={note.name} modified={note.modified} folderId={note.folderId} content={note.content} /></Link>;
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