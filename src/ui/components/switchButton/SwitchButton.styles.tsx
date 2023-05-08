import styled from 'styled-components';

// $isActiveToggleSwitch: $turquoise;
// $isActiveToggleSwitchKnob: $light-pink;
// $isActiveHoverToggleSwitch: $light-turquoise;
// $isActiveFocusToggleSwitch: $transparent-turquoise;

// $toggleSwitch: $dark-gray;
// $toggleSwitchKnob: $light-pink;
// $focusToggleSwitch: $transparent-gray;
// $hoverToggleSwitch: $lightest-gray;

// $disabledToggleSwitch: $gray;
// $disabledToggleSwitchKnob: $light-gray;

// $white: #ffffff;
// $dark-gray: #cbcbcb;
// $gray: #e5e5e5;
// $light-gray: #f5f5f5;
// $lightest-gray: #dbdbdb;
// $transparent-gray: #cbcbcb78;
// $light-pink: #ffdbe1;
// $lightest-pink: #f9e8eb;
// $turquoise: #00db9e;
// $light-turquoise: #06f1b0;
// $transparent-turquoise: #00db9e4f;

// $fontSizeToggleSwitch: 13px;
// $YgutterToggleSwitch: 5px;
// $toggleSwitchBorderRadius: 2.5em;
// $toggleSwitchWidth: 5em;
// $toggleSwitchHeight: 2.5em;

// //toggle knob
// $toggleKnobSize: 1.875em;
// $toggleTopKnobGutter: 0.3125em;
// $toggleLeftKnobGutter: 0.4em;

interface KnobProps {
  isActive?: boolean,
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ToggleSwitch = styled.button`
  width: 20px;
  height: 10px;
  background: yellow;
  display: flex;
  position: relative;
  background: #cbcbcb;
  font-size: 13px;
  width: 5em;
  height: 2.5em;
  margin: 5px;
  box-sizing: border-box;
  border-radius: 2.5em;  
  cursor: pointer;
  box-shadow: 0 10px 20px -8px #e5e5e5;
  transition: 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
  border: none;

  &:hover {
    background: #dbdbdb;
  }

  outline: 2px solid transparent;

  &:focus,
  &:focus-visible {
    outline-color: #cbcbcb78;
  }
}
`

export const Knob = styled.div<KnobProps>`
  position: absolute;
  width: 1.875em;
  height: 1.875em;
  border-radius: 50%;
  top: 0.3125em;
  left: 0.4em;
  background: #ffdbe1;
  transition: 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;

  ${props => props.isActive && `
  background: #89C4FF;
  transform: translateX(125%);
`}

`

export const OptionText = styled.span`
  color: purple;
  font-size: 15px;
`