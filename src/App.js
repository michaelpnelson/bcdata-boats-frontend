import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import BoatList from './BoatList.js';
// import { getBoats } from './RestClient.js';
import Board, { moveCard } from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';
import './App.css';

const startingBoard = {
  columns: [
    {
      id: 1,
      title: 'Backlog',
      cards: [
        {
          id: 1,
          title: 'Add card',
          description: 'Add capability to add a card in a column'
        },
      ]
    },
    {
      id: 2,
      title: 'Doing',
      cards: [
        {
          id: 2,
          title: 'Drag-n-drop support',
          description: 'Move a card between the columns'
        },
      ]
    }
  ]
}

function App() {
  return (
    <div className="App">
        <h1>Boat Tracker</h1>
        <Board initialBoard={startingBoard} 
          allowRemoveLane
          allowRenameColumn
          allowRemoveCard
          onLaneRemove={console.log}
          onCardRemove={console.log}
          onLaneRename={console.log}
          allowAddCard={{ on: "top" }}
          onNewCardConfirm={draftCard => ({
            id: new Date().getTime(),
            ...draftCard
          })}
          onCardNew={console.log}/>
        <BoatList/>
        <p>
          More to come!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

// This follows the suggestion in
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
// but still doesn't seem to work ... not sure why ...
const container = document.getElementById("root");
const root = createRoot(container); 
root.render(<App />);

export default App;
