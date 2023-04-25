import React, { useState } from "react";
import { Wrapper, CardFront, CardBack, Box1, Box2 } from "./Tile.styles";

interface Props {
  children: any,
  imageSrc?: string,
  isFlipped?: boolean,
  isPaired?: boolean,
  onClick: VoidFunction,
}

export const Tile = ({
  // imageSrc,
  children,
  isFlipped = false,
  isPaired = false,
  onClick,
}: Props) => {
  const [active, setActive] = useState(isFlipped);
  
  const handleOnClick = () => {
    setActive(!active);
    console.log(active)
    onClick();
  };


  return (
    <Wrapper
      disabled={isPaired}
      isFlipped={active}
      onClick={handleOnClick}
    >
      <CardFront>
        <Box1>
          {children}
        </Box1>
      </CardFront>
      <CardBack>
        <Box2 />
      </CardBack>
    </Wrapper>
  )
};

export default Tile;
