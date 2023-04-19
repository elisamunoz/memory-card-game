import styled from 'styled-components';

interface WraperProps {
  isFlipped?: boolean,
  isPaired?: boolean,
}

export const Wrapper = styled.button<WraperProps>`
  align-self: center;
  flex-grow: 1;
  border-radius: 8px;
  padding: 0.5rem 0;
  margin: 5px;
  width: 75px;
  height: 75px;
  background: #FFCF7F;
  color: white;
  border: none;
  cursor: pointer;

  .isFlipped {
    background: purple;
  }

  ${props => props.disabled && `
    background: #9BCB3C;
  `}

  ${props => props.isFlipped && `
    background: #89C4FF;
  `}
`;



