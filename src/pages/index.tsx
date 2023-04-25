import React, { useState, useMemo } from "react"
import type { HeadFC, PageProps } from "gatsby"
import Board from "../ui/components/board"
import Tile from "../ui/components/tile"
import ScoreBoard from "../ui/components/scoreBoard"

import '../styles/global.css';

const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flexGrow: "1",

  minHeight: "100vh",
  padding: 0,
  margin: 0,
  background: "pink",
}

const roundFloorOddNumber = (number: number): number => number % 2 === 0 ? number/2 : Math.floor(number/2)

const getTiles = (tilesAmount: number): number[] => {
  const tileIds: number[] = Array.from({length: roundFloorOddNumber(tilesAmount)}, (_, i) => i + 1);
  const cloneTiles: number[] = tileIds.concat(tileIds)
  const randomTimes = cloneTiles.sort(() => Math.random() - 0.5);
  
  return randomTimes;
}

const IndexPage: React.FC<PageProps> = () => {
  const [moves, setMoves] = useState(0);
  
  const tiles = useMemo(
    () => getTiles(16), []
  );

  const handleClickTile = (tileId: number) => {
    console.log(`Tile id: ${tileId}`);
    setMoves(moves + 1);
  };

  const resetGame = () => {
    setMoves(0);
  }

  return (
    <main style={pageStyles}>
      <ScoreBoard
        onClick={() => resetGame()}>
        {`Moves: ${roundFloorOddNumber(moves)}`}
      </ScoreBoard>
      <Board>
        {tiles.map((tileId, i) => (
          <Tile
            key={i}
            onClick={() => handleClickTile(tileId)}
            isFlipped={tileId === 2}
            isPaired={tileId === 4}
          >{tileId}</Tile>
          ))}
      </Board>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
