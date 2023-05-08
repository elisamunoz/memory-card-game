import styled from 'styled-components';

interface BoardProps {
  isNormalMode: boolean,
}

export const Wrapper = styled.div`
  display: flex;
  align-self: center;
`;

export const BoardStyled = styled.div<BoardProps>`
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  padding: 16px;
  width: 345px;
  height: 345px;
  background: #FFFA62;
  color: white;
  box-shadow: 14px 14px 0 0 #000000;

  ${props => props.isNormalMode && `
    width: 510px;
    height: 510px;
  `}
`;

