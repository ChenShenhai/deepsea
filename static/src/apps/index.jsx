import React from 'react';
import Button from './../components/Button';
import TextBox from './../components/TextBox';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>react-webpack</h1>
        <TextBox />
        <Button />
      </div>
    )
  }
}

export default App;