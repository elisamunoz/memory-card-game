import * as React from "react";
import { Wrapper, BoardStyled } from "./Board.styles";

interface Props {
  children: any,
  isNormalMode: boolean
}

export const Board = ({
  children,
  isNormalMode
}: Props) => {
  return (
    <Wrapper>
      <BoardStyled isNormalMode={isNormalMode}>
        {children}
      </BoardStyled>
    </Wrapper>
  )
};

export default Board;
