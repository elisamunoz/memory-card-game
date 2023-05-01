import React from "react";
import { Wrapper, Score, Reset } from "./ScoreBoard.styles";

interface Props {
  children: any,
  onClick: VoidFunction
}

export const ScoreBoard = ({
  children,
  onClick
}: Props) => {
  
  return (
    <Wrapper>
      <Score>
        {children}
      </Score>
      <Reset onClick={onClick}>
        Reset
      </Reset>
    </Wrapper>
  )
};

export default ScoreBoard;