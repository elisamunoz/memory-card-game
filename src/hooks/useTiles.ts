import { useState, useEffect } from "react";

type TileIdType = number;
type TileValueType = number;
export type tileType = {
  id: TileIdType;
  value: TileValueType;
  img?: string;
};

const roundFloorOddNumber = (number: number): number => number % 2 === 0 ? number/2 : Math.floor(number/2);

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

export const useTiles = (totalTiles: number) => {
  const [userClicks, setUserClicks] = useState(0);
  const [tiles, setTiles] = useState<tileType[]>(getTiles(totalTiles));
  const [flippedTiles, setFlippedTiles] = useState<TileIdType[]>([]);
  const [pairedTiles, setPairedTiles] = useState<TileValueType[]>([]);

  const getTileById = (tileId: TileIdType) => tiles.find(tile => tile.id === tileId) as tileType
  const moves = roundFloorOddNumber(userClicks);

  useEffect(() => {
   resetGame();
  }, [totalTiles]);

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

  const resetGame = () => {
    setUserClicks(0);
    setFlippedTiles([]);
    setPairedTiles([]);
    setTiles(getTiles(totalTiles));
    console.log(document.body.offsetWidth)
  }

  const handleClickTile = (tileId: TileIdType) => {
    setUserClicks(userClicks+1)

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

  const isTileFlipped = (tileId: TileIdType): boolean =>
    flippedTiles.includes(tileId)
  
  const isTilePaired = (tileValue: TileValueType): boolean =>
    pairedTiles.includes(tileValue);

  const isGameFinished = pairedTiles.length === tiles.length/2;

  return {
    tiles,
    moves,

    isTileFlipped,
    isTilePaired,
    isGameFinished,

    handleClickTile,
    resetGame,
  }
};


export default useTiles;
