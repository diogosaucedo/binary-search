import React from 'react';
import { black, primaryColor, white } from '../../../configs/colors';
import Button from '../../Form/Button';
import Center from '../../Layout/Center';
import Text from '../../Typography/Text';
import EndType from './type';

const End = ({ guess, guessCounter, startGame }: EndType) => {
  return (
    <Center>
      <Text fontSize="1.6rem" color={black} fontWeight={500}>
        I hit number {guess} with {guessCounter} guesses!
      </Text>
      <hr />
      <Button
        onClick={startGame}
        fontSize={'1.6rem'}
        background={primaryColor}
        color={white}
        border={'none'}
        width={'16rem'}
        height={'4rem'}
        borderRadius={'0.8rem'}
      >
        Once again!
      </Button>
    </Center>
  );
};

export default End;
