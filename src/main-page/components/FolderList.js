import React from 'react';
import AddFolder from './AddFolder'
import Folder from './Folder'

export default class FolderList extends React.Component {
  render() {

    const folders = this.props.folders.map(folder => {
      let highlightTarget = false;
      if (this.props.highlightTarget === folder) {
        highlightTarget = true;
      }
      return <Folder key={folder.id} folderId={folder.id} name={folder.name} highlightTarget={highlightTarget} />
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