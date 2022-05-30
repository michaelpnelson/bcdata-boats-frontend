import React from 'react';

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
        return <p>Status of all boats: {boats}</p>;
      }
    }
  }

export default BoatList;