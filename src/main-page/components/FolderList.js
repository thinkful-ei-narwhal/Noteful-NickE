import React from 'react';
import AddFolder from './AddFolder'
import Folder from './Folder'

export default class FolderList extends React.Component {
  render() {
    const folders = this.props.folders.map(folder => {
      return <Folder key={folder.id} folderId={folder.id} name={folder.name} />
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