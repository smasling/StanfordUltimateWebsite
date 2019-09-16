import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  height: 40vw;
  width: 40%;
  background: blue;
  right: 30%;
  left: 30%;
  z-index: 10;
`;

export const Scrim = styled.div`
  position: fixed;
  top: 110px;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
  background: black;
  opacity: 0.2;
`;
