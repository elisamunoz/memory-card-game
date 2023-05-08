import React, {useState, useEffect} from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../ui/layout/header"
import Board from "../ui/components/board"
import Tile from "../ui/components/tile"
import ScoreBoard from "../ui/components/scoreBoard"
import SuccessModal from "../ui/layout/successModal"
import SwitchButton from "../ui/components/switchButton"
import { useTiles, tileType  } from '../hooks/useTiles';

import '../styles/global.css';
import { StyledBody } from '../styles/app.styles';

const TOTAL_TILES_EASY = 16;
const TOTAL_TILES_NORMAL = 36;
const isLargeScreen = document.body.offsetWidth > 800 && document.body.offsetHeight > 713

const IndexPage: React.FC<PageProps> = () => {
  const [totalTiles, setTotalTiles] = useState(TOTAL_TILES_EASY)
  const {
    tiles,
    moves,

    isTileFlipped,
    isTilePaired,
    isGameFinished,

    handleClickTile,
    resetGame,
  } = useTiles(totalTiles);

  const [isNormalMode, setIsNormalMode] = useState(false)
  
  const switchButtonIsActive = () => setIsNormalMode(!isNormalMode)

  useEffect(()=> {
    isNormalMode ? setTotalTiles(TOTAL_TILES_NORMAL) : setTotalTiles(TOTAL_TILES_EASY)
  }, [isNormalMode])
  
  return (
    <StyledBody>
      <Header>
        Memory Game
        {isLargeScreen  && 
          <SwitchButton
          option1="4x4"
          option2="6x6"
          onClick={switchButtonIsActive}
          isActive={isNormalMode} />
        }
        
      </Header>
      {!isGameFinished &&
        <>
          <ScoreBoard
            onClick={() => resetGame()}>
            {`Moves: ${moves}`}
          </ScoreBoard>
          <Board 
            isNormalMode={isNormalMode}>
            {tiles.map((tile: tileType, i) => (
              <Tile
                key={i}
                id={tile.id}
                onClick={handleClickTile}
                isFlipped={isTileFlipped(tile.id)}
                isPaired={isTilePaired(tile.value)}
              >{tile.value}</Tile>
              ))}
          </Board>
        </>
      }
      {isGameFinished && 
        <SuccessModal
          onClick={() => resetGame()}
          mainMessage="Congratulations!"
          secondaryMessage={`You won with ${moves} moves`}
          buttonMessage="Play again!"/>
      }
    </StyledBody>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
