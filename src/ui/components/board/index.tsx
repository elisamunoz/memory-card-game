import * as React from "react";
import { Wrapper, BoardStyled } from "./Board.styles";

interface Props {
  children: any
}

export const Board = ({
  children
}: Props) => {
  return (
    <Wrapper>
      <BoardStyled>
        {children}
      </BoardStyled>
    </Wrapper>
  )
};

export default Board;
