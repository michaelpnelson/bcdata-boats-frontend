function getBoats() {
    const url = 'https://protected-plateau-53607.herokuapp.com/boats';
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
          return result;
      },
      (error) => {
          return error;
      }
    );
}

export { getBoats };