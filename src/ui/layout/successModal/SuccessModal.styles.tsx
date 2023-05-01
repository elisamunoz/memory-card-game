import styled from 'styled-components';

interface WraperProps {
}

export const Wrapper = styled.div<WraperProps>`
position: absolute;
display: flex;
top: 0;
right: 0;
left: 0;
bottom: 0;
background: white;
border: none;
flex-direction: column;
justify-content: center;
text-align: center;
`;

export const MainMessage = styled.span`
  color: #575757;
  font-size: 30px;
  font-weight: 600;
  text-transform: none;
  line-height: 60px;
`
export const SecondaryMessage = styled.span`
  font-size: 18px;
  font-weight: 300;
  float: none;
  line-height: normal;
  color: #555;
`

export const Button = styled.button`
  background-color: rgb(155, 203, 60);
  border: none;
  color: #fff;
  border: 0;
  box-shadow: none;
  font-size: 17px;
  font-weight: 500;
  border-radius: 5px;
  padding: 10px 32px;
  margin: 10px auto 0;;
  cursor: pointer;

`



