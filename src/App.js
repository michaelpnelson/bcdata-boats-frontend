import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Boat Tracker</h1>
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
      </header>
    </div>
  );
}

class BoatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    const backendURL = process.env.BACKEND-URL;
    console.log(backendURL);
    const url = 'https://protected-plateau-53607.herokuapp.com/boats';
    fetch(url)
    .then(res => res.text())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          boats: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const { error, isLoaded, boats } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <p>{boats}</p>;
      // return (
      //   <ul>
      //     {boats.map(boat => (
      //       <li>
      //         {boat}
      //       </li>
      //     ))}
      //   </ul>
      // );
    }
  }
}

export default App;
