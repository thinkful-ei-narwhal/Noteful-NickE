import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Header from './components/Header'
import NoteList from './components/NoteList'
import FolderList from './components/FolderList'
import Folder from './components/Folder'
import Note from './components/Note'
import CurrentNoteInfo from './components/CurrentNoteInfo'
import BackButton from './components/BackButton';

export default function App(props) {
  return (
    <main className='App'>
      <Header />
      <div className='main-content'>


        {/* ROUTE 1 > MAIN ROUTE | SHOWS ALL FOLDERS AND NOTES*/}
        <Route exact path="/" render={(routeProps) => <FolderList folders={props.store.folders} highlightTarget={null} {...routeProps} />} />
        <Route exact path="/" render={(routeProps) => <NoteList notes={props.store.notes} {...routeProps} />} />


        {/* ROUTE 2 > FOLDER ROUTE ID | SHOWS SELECTED FOLDER AND NOTES */}
        <Route exact path="/folder/:folderId" render={
          (routeProps) =>
            <FolderList
              folders={props.store.folders}
              highlightTarget={props.store.folders.find(folder => folder.id === routeProps.match.params.folderId)}
              {...routeProps}
            />
        }
        />
        <Route exact path="/folder/:folderId" render={
          (routeProps) =>
            <NoteList
              notes={props.store.notes.filter(note => note.folderId === routeProps.match.params.folderId)}
              {...routeProps}
            />
        }
        />

        {/* ROUTE 3 > NOTE ROUTE ID | SHOWS 1 NOTE */}
        <Route exact path="/note/:noteId" render={
          (routeProps) =>
            <BackButton
              {...routeProps}
            />
        }
        />
        <Route exact path="/note/:noteId" render={
          (routeProps) =>
            <Folder
              key={findFolderByNoteId(routeProps.match.params.noteId).id}
              folderId={findFolderByNoteId(routeProps.match.params.noteId).id}
              name={findFolderByNoteId(routeProps.match.params.noteId).name}
              highlightTarget={null}
              {...routeProps}
            />
        }
        />
        <Route exact path="/note/:noteId" render={
          (routeProps) =>
            <Note key={findNoteById(routeProps.match.params.noteId).id}
              noteId={findNoteById(routeProps.match.params.noteId).id}
              name={findNoteById(routeProps.match.params.noteId).name}
              modified={findNoteById(routeProps.match.params.noteId).modified}
              folderId={findNoteById(routeProps.match.params.noteId).folderId}
              content={findNoteById(routeProps.match.params.noteId).content}
              {...routeProps}
            />
        }
        />
        <Route exact path="/note/:noteId" render={
          (routeProps) =>
            <CurrentNoteInfo
              content={findNoteById(routeProps.match.params.noteId).content}
              {...routeProps}
            />
        }
        />

      </div>
    </main>
  );

  function findFolderByNoteId(noteId) {
    return props.store.folders.find(folder => folder.id === findNoteById(noteId).folderId)
  }

  function findNoteById(noteId) {
    return props.store.notes.find(note => note.id === noteId)
  }
}