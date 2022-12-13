import React from 'react';
import Button from '../../Form/Button';
import Center from '../../Layout/Center';
import Stack from '../../Layout/Stack';
import Text from '../../Typography/Text';
import RunningType from './type';
import { primaryColor, black, white } from '../../../configs/colors';

const Running = ({ guess, less, win, greater }: RunningType) => {
  const buttonProps = {
    fontSize: '1.6rem',
    background: primaryColor,
    color: white,
    border: 'none',
    width: '8rem',
    height: '4rem',
    borderRadius: '0.8rem',
  };
  return (
    <Center>
      <Text fontSize="1.6rem" color={black} fontWeight={500}>
        Is your number {guess}?
      </Text>
      <br />
      <Stack gap="8px">
        <Button onClick={less} {...buttonProps}>
          Less
        </Button>
        <Button onClick={win} {...buttonProps}>
          Win
        </Button>
        <Button onClick={greater} {...buttonProps}>
          Greater
        </Button>
      </Stack>
    </Center>
  );
};

export default Running;
