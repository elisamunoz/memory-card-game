import React, { useState } from "react";
import { Wrapper } from "./Tile.styles";

interface Props {
  imageSrc?: string,
  isFlipped?: boolean,
  isPaired?: boolean,
  onClick: VoidFunction,
}

export const Tile = ({
  // imageSrc,
  isFlipped = false,
  isPaired = false,
  // className,
  onClick,
}: Props) => {
  const [active, setActive] = useState(isFlipped);
  
  const handleOnClick = () => {
    setActive(!active);
    onClick();
  };


  return (
    <Wrapper
      disabled={isPaired}
      isFlipped={active}
      onClick={handleOnClick}
    >
      A
    </Wrapper>
  )
};

export default Tile;
