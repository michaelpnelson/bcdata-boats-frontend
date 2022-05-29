import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Boat Tracker</h1>
        <img src={logo} className="App-logo" alt="logo" />
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
    // const url = 'https://reactjs.org';
    const url = 'https://protected-plateau-53607.herokuapp.com/boats';
    const args = {
      mode: 'no-cors'
    };

    fetch(url, args)
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
