import styled from '@emotion/styled';
import { theme } from 'styles';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.transparencyGrey50};
  z-index: 1200;
`;

export const ModalEl = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
