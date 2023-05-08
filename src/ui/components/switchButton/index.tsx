import React, {useState} from "react";
import { Wrapper, OptionText, ToggleSwitch, Knob } from "./SwitchButton.styles";

interface Props {
    option1: string,
    option2: string,
    disabled?: boolean,
    onClick?: VoidFunction,
    isActive?: boolean,
}

export const SwitchButton = ({
  option1,
  option2,
  disabled=false,
  onClick,
  isActive=true
}: Props) => {


  // const handleOnClick = () => {
  //   if (!disabled) {
  //     onClick
  //     console.log("click")
  //   }
  // }
  return (
    <Wrapper>
      <OptionText>{option1}</OptionText>
        <ToggleSwitch 
          disabled={disabled}
          onClick={onClick}
        >
          <Knob isActive={isActive}/>
        </ToggleSwitch>
      <OptionText>{option2}</OptionText>
  </Wrapper>
  )
};

export default SwitchButton;
