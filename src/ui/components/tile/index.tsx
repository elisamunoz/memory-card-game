import React, { useState } from "react";
import { Wrapper, CardFront, CardBack, Box1, Box2 } from "./Tile.styles";

interface Props {
  id: number,
  children: any,
  imageSrc?: string,
  isFlipped?: boolean,
  isPaired?: boolean,
  onClick: (tileId: number) => void,
}

export const Tile = ({
  id,
  // imageSrc,
  children,
  isFlipped = false,
  isPaired = false,
  onClick,
}: Props) => {
  // const [active, setActive] = useState(isFlipped);
  
  const handleOnClick = () => {
    // setActive(!active);
    // if (!isFlipped && !isPaired) {
      onClick(id);
    // }
  };


  return (
    <Wrapper
      disabled={isPaired}
      isFlipped={isFlipped}
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
