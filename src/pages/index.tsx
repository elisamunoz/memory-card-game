import React, { useState, useMemo, useEffect } from "react"
import type { HeadFC, PageProps } from "gatsby"
import Board from "../ui/components/board"
import Tile from "../ui/components/tile"
import ScoreBoard from "../ui/components/scoreBoard"
import SuccessModal from "../ui/layout/successModal"

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

type TileIdType = number;
type TileValueType = number;
type tileType = {
  id: TileIdType;
  value: TileValueType;
  img?: string;
};

const getTiles = (tilesAmount: number): tileType[] => {
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
  const [tiles, setTiles] = useState(getTiles(2));
  const [flippedTiles, setFlippedTiles] = useState<TileIdType[]>([]);
  const [pairedTiles, setPairedTiles] = useState<TileValueType[]>([]);
  const scoreMoves = roundFloorOddNumber(moves)
  const finishedGame = pairedTiles.length === tiles.length/2
 
  useEffect(()=> {
    // set paired tiles
    if (flippedTiles.length === 2) {
      const [tileId1, tileId2] = flippedTiles;

      const tile1 = getTileById(tileId1);
      const tile2 = getTileById(tileId2);

      if (tile1.value === tile2.value) {
        setPairedTiles([
          ...pairedTiles,
          tile1.value,
        ]);

        setFlippedTiles([]);
      } else {
        setTimeout(() => {
          setFlippedTiles([])
        }, 1000);
      }
    }
  }, [flippedTiles])

  const getTileById = (tileId: TileIdType) => tiles.find(tile => tile.id === tileId) as tileType
    
  const handleClickTile = (tileId: TileIdType) => {
    setMoves(moves+1)

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
  };

  const resetGame = () => {
    setMoves(0);
    setFlippedTiles([]);
    setPairedTiles([]);
    setTiles(getTiles(16));
  }

  return (
    <main 
      style={pageStyles}
    >
      {!finishedGame &&
        <>
          <ScoreBoard
            onClick={() => resetGame()}>
            {`Moves: ${scoreMoves}`}
          </ScoreBoard>
          <Board>
            {tiles.map((tile: tileType, i) => (
              <Tile
                key={i}
                id={tile.id}
                onClick={handleClickTile}
                isFlipped={flippedTiles.includes(tile.id)}
                isPaired={pairedTiles.includes(tile.value)}
              >{tile.value}</Tile>
              ))}
          </Board>
        </>
      }
      {finishedGame && 
        <SuccessModal
          onClick={() => resetGame()}
          mainMessage="Congratulations!"
          secondaryMessage={`You won with ${scoreMoves} moves`}
          buttonMessage="Play again!"/>
      }
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
