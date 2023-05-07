import React from "react"
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

const IndexPage: React.FC<PageProps> = () => {
  const {
    tiles,
    moves,

    isTileFlipped,
    isTilePaired,
    isGameFinished,

    handleClickTile,
    resetGame,
  } = useTiles(16);
  
  return (
    <StyledBody>
      <Header>
        Memory Game
        <SwitchButton
          option1="ola"
          option2="kase" />
      </Header>
      {!isGameFinished &&
        <>
          <ScoreBoard
            onClick={() => resetGame()}>
            {`Moves: ${moves}`}
          </ScoreBoard>
          <Board>
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
