import React from 'react';
import './App.css';
import Header from './components/Header'
import NoteList from './components/NoteList'
import FolderList from './components/FolderList'

export default function App(props) {
  console.log(props.store);

  return (
    <main className='App'>
      <Header />
      <div className='main-content'>
        <FolderList folders={props.store.folders} />
        <NoteList notes={props.store.notes} />
      </div>
    </main>
  );
}