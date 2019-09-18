import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  height: 40vw;
  width: 40%;
  background: #fafafa;
  right: 30%;
  left: 30%;
  z-index: 10;
  button :nth-of-type(2) {
    background: blue;
  }
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5%;
  label {
    margin-top: 20px;
  }
  width: 100%;
`;
