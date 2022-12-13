import React from 'react';

type ButtonType = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  width?: string;
  height?: string;
  borderRadius?: string;
  background?: string;
  border?: string;
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  textDecoration?: string;
  hover?: string;
};

export default ButtonType;
