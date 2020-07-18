import React from 'react';
import InputFiles from './Class/FileSelector'

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';



function App() {

  return (
    <React.Fragment>
      <div className="App"> 
        <header className="App-header align-center">
          <h1>Emissao de NFS-e</h1>
          <InputFiles value='' />
        </header>
      </div>
    </React.Fragment>
  );
}

export default App;
