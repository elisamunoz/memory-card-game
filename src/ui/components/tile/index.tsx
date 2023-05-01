import React from "react";
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
  
  const handleOnClick = () => {
      onClick(id);
  };

  const showFlipped = isFlipped || isPaired;

  return (
    <Wrapper
      disabled={showFlipped}
      isPaired={isPaired}
      isFlipped={showFlipped}
      onClick={handleOnClick}
    >
      <CardFront>
        <Box1>
          {showFlipped && children}
        </Box1>
      </CardFront>
      <CardBack>
        <Box2 />
      </CardBack>
    </Wrapper>
  )
};

export default Tile;
