import React from "react";
import { Wrapper, MainMessage, SecondaryMessage, Button } from "./SuccessModal.styles";

interface Props {
  mainMessage: string,
  secondaryMessage?: string,
  buttonMessage?: string,
  onClick: VoidFunction,
}

export const SuccessModal = ({
  mainMessage,
  secondaryMessage,
  buttonMessage,
  onClick,
 
}: Props) => {

  return (
    <Wrapper>
      <MainMessage>
        {mainMessage}
      </MainMessage>
      <SecondaryMessage>
        {secondaryMessage}
      </SecondaryMessage>
      <Button onClick={onClick}>
        {buttonMessage}
      </Button>
    </Wrapper>
  )
};

export default SuccessModal;
