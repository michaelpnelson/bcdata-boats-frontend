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
    </div>
  );
}

export default App;
