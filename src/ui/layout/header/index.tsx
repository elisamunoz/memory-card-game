import React from "react";
import { Wrapper } from "./Header.styles";

interface Props {
  children: any,
}

export const Header = ({
  children,
}: Props) => {

  return (
    <Wrapper
     
    >
      {children}
  </Wrapper>
  )
};

export default Header;
