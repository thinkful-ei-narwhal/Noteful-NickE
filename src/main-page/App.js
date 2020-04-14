import React from 'react';
import './App.css';
import Header from './components/Header'
import NoteList from './components/NoteList'
import FolderList from './components/FolderList'
import Folder from './components/Folder'
import Note from './components/Note'
import CurrentNoteInfo from './components/CurrentNoteInfo'
import BackButton from './components/BackButton';

export default function App(props) {

  //testing for folder route
  // const testingFolderPick = props.store.folders[2];
  // const routeTwoNotes = props.store.notes.filter(note => note.folderId === testingFolderPick.id);

  //testing for individual note route
  const testingNotePick = props.store.notes[0];
  const routeThreeFolder = props.store.folders.find(folder => folder.id === testingNotePick.folderId)

  return (
    <main className='App'>
      <Header />
      <div className='main-content'>

        {/* ROUTE 1 > MAIN ROUTE | SHOWS ALL FOLDERS AND NOTES*/}
        {/* <FolderList folders={props.store.folders} highlightTarget={null} />
        <NoteList notes={props.store.notes} /> */}

        {/* ROUTE 2 > FOLDER ROUTE | SHOWS SELECTED FOLDER AND NOTES */}
        {/* <FolderList folders={props.store.folders} highlightTarget={testingFolderPick} />
        <NoteList notes={routeTwoNotes} /> */}

        {/* ROUTE 3 > NOTE ROUTE | SHOWS 1 NOTE */}
        {/* Needs Separate styling  */}
        <BackButton  />
        <Folder key={routeThreeFolder.id} folderId={routeThreeFolder.id} name={routeThreeFolder.name} highlightTarget={null} />
        <Note key={testingNotePick.id} noteId={testingNotePick.id} name={testingNotePick.name} modified={testingNotePick.modified} folderId={testingNotePick.folderId} content={testingNotePick.content} />
        <CurrentNoteInfo content={testingNotePick.content} />
      </div>
    </main>
  );
}