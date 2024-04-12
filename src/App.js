import React from 'react';
import './App.css';
import CreateTraining from '../src/components/CreateTraining';
import ReadTraining from '../src/components/ReadTraining';
import UpdateTraining from '../src/components/UpdateTraining';
import DeleteTraining from '../src/components/DeleteTraining';

function App() {
  return (
    <div className="App">
      <h1>Training Management</h1>
      <CreateTraining />
      <ReadTraining />
      <UpdateTraining />
      <DeleteTraining />
    </div>
  );
}

export default App;
