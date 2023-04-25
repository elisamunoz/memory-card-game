import styled from 'styled-components';

interface WraperProps {
  isFlipped?: boolean,
  isPaired?: boolean,
}

export const Wrapper = styled.button<WraperProps>`
  position: relative;
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

export const Card = styled.div`
  height: inherit;
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  top: 0;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transition: all .4s ease-in-out;
`

export const CardFront = styled(Card)`
  z-index: 900;
  transform: rotateX(0deg) rotateY(0deg);
`

export const CardBack = styled(Card)`
  z-index: 1000;
  transform: rotateY(-180deg);
`

export const Box = styled.div`
  align-self: center;
`

export const Box1 = styled(Box)`

`

export const Box2 = styled(Box)`
  background: green;
    &:hover {
      background: gray;
    }
`







