import React from 'react';
import Button from './components/Form/Button';
import Center from './components/Layout/Center';
import Stack from './components/Layout/Stack';
import Text from './components/Typography/Text';
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

  if (state === 'START') {
    return (
      <div className="App">
        <GlobalStyles />
        <Button onClick={startGame}>Start Game</Button>
      </div>
    );
  }

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

  if (state === 'END') {
    return (
      <div className="App">
        <GlobalStyles />
        <Center>
          <Text>
            I hit number {guess} with {guessCounter} guesses!
          </Text>
          <Button onClick={startGame}>Start Game</Button>
        </Center>
      </div>
    );
  }
  return (
    <div className="App">
      <GlobalStyles />
      <Center>
        <Text>Is your number {guess}?</Text>
        <Stack gap="8px">
          <Button onClick={less}>Less</Button>
          <Button onClick={win}>Win</Button>
          <Button onClick={greater}>Greater</Button>
        </Stack>
      </Center>
    </div>
  );
}

export default App;
