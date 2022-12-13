import React from 'react';
import End from './components/Binary Search/End';
import Running from './components/Binary Search/Running';
import Start from './components/Binary Search/Start';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  // START, RUNNING, END
  const [state, setState] = React.useState('START');

  // guess
  const [guess, setGuess] = React.useState(150);
  const [guessCounter, setGuessCounter] = React.useState(0);

  // range
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(300);

  const startGame = () => {
    setState('RUNNING');
    setMin(0);
    setMax(300);
    setGuessCounter(1);
    setGuess(150);
  };

  const less = () => {
    setGuessCounter(guessCounter + 1);
    setMax(guess);
    const nextGuess = Math.floor((guess - min) / 2) + min;
    setGuess(nextGuess);
  };

  const greater = () => {
    setGuessCounter(guessCounter + 1);
    setMin(guess);
    const nextGuess = Math.floor((max - guess) / 2) + guess;
    setGuess(nextGuess);
  };

  const win = () => {
    setState('END');
  };

  return (
    <div className="App">
      <GlobalStyles />
      <br />
      {state === 'START' ? (
        <Start startGame={startGame}>Let me guess!</Start>
      ) : state === 'END' ? (
        <End
          guess={guess}
          guessCounter={guessCounter}
          startGame={startGame}
        ></End>
      ) : (
        <Running
          guess={guess}
          less={less}
          win={win}
          greater={greater}
        ></Running>
      )}
    </div>
  );
}

export default App;
