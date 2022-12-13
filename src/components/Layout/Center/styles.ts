import styled from 'styled-components';
import CenterType from './type';

const Center = styled.div<CenterType>`
  // Layout
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // Box Model
  width: ${({ width }) => width || 'fit-content'};
  height: ${({ height }) => height || 'fit-content'};
  padding: ${({ padding }) => padding};

  // Display
  border-radius: ${({ borderRadius }) => borderRadius};
  background: ${({ background }) => background};
  border: ${({ border }) => border};
`;

export { Center };
