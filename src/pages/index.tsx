import React, { useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import Board from "../ui/components/board"
import Tile from "../ui/components/tile"

import '../styles/global.css';

const pageStyles = {
  color: "#232129",
  // padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  justifyContent: "center",
  flexGrow: "1",

  minHeight: "100vh",
  padding: 0,
  margin: 0,
  background: "pink",
}
const tileIds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

const IndexPage: React.FC<PageProps> = () => {
  const [moves, setMoves] = useState(0);
  
  const handleClickTile = (tileId: number) => {
    console.log(`Tile id: ${tileId}`);
    setMoves(moves + 1);
  };

  return (
    <main style={pageStyles}>
      {`Moves ${moves}`}
      <Board>
        {tileIds.map((tileId) => (
          <Tile
            key={tileId}
            onClick={() => handleClickTile(tileId)}
            isFlipped={tileId === 2}
            isPaired={tileId === 4}
          />
          ))}
      </Board>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
