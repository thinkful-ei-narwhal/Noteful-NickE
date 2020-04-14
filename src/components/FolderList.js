import React from 'react';
import AddFolder from './AddFolder'
import Folder from './Folder'
import { Link } from 'react-router-dom';

export default class FolderList extends React.Component {
  render() {

    const folders = this.props.folders.map(folder => {
      let highlightTarget = false;
      if (this.props.highlightTarget === folder) {
        highlightTarget = true;
      }
      return <Link key={folder.id} to={`/folder/${folder.id}`}><Folder folderId={folder.id} name={folder.name} highlightTarget={highlightTarget} /></Link>;
    });

    return (
      <div>
        <h2>Folders</h2>
        {folders}
        <AddFolder />
      </div>
    );
  }
}