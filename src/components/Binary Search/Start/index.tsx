import React from 'react';
import Button from '../../Form/Button';
import Text from '../../Typography/Text';
import Center from '../../Layout/Center';
import StartType from './type';
import { black, primaryColor, white } from '../../../configs/colors';

const Start = ({ children, startGame }: StartType) => {
  return (
    <Center>
      <Text fontSize="1.6rem" color={black} fontWeight={500}>
        Think of a number between 0 and 300!
      </Text>
      <br />
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
        {children}
      </Button>
    </Center>
  );
};

export default Start;
