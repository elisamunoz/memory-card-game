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

type tyleType = {
  id: number;
  value: number;
  img?: string;
};

const getTiles = (tilesAmount: number): tyleType[] => {
  const tileIds: number[] = Array.from({length: roundFloorOddNumber(tilesAmount)}, (_, i) => i + 1);
  const cloneTiles: number[] = tileIds.concat(tileIds)
  const randomTimes = cloneTiles.sort(() => Math.random() - 0.5);
  
  return randomTimes.map((tileId, i) => {
    return {
      id: i,
      value: tileId,
      img: 'string',
    }
  });
}

const IndexPage: React.FC<PageProps> = () => {
  const [moves, setMoves] = useState(0);
  const [tiles, setTiles] = useState(getTiles(16));
  const [flippedTiles, setFlippedTiles] = useState<number[]>([]);
  const [pairedTiles, setPairedTiles] = useState<number[]>([]);
  // const tiles = useMemo(
  //   () => getTiles(16), []
  // );

  const handleClickTile = (tileId: number) => {
    setMoves(moves + 1);

    // Flipp logic
    if (flippedTiles.length > 1) {
      setFlippedTiles([])
    } else {
      const newFlippedState = [
        ...flippedTiles,
        tileId,
      ]
      setFlippedTiles(newFlippedState);
    }

    // Paired logic

  };

  const resetGame = () => {
    setMoves(0);
    setFlippedTiles([]);
    setPairedTiles([]);
    // TODO: reset tiles
  }

  return (
    <main style={pageStyles}>
      <ScoreBoard
        onClick={() => resetGame()}>
        {`Moves: ${roundFloorOddNumber(moves)}`}
      </ScoreBoard>
      <Board>
        {tiles.map((tile: tyleType, i) => (
          <Tile
            key={i}
            id={tile.id}
            onClick={handleClickTile}
            isFlipped={flippedTiles.includes(tile.id)}
            isPaired={pairedTiles.includes(tile.value)}
          >{tile.value}</Tile>
          ))}
      </Board>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
