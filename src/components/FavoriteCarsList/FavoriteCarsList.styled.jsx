import styled from '@emotion/styled';
import { theme } from 'styles';

export const List = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(10)};
`;
