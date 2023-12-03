import styled from '@emotion/styled';
import { theme } from 'styles';

export const List = styled.ul`
  height: auto;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(10)};
  margin-left: auto;
  margin-right: auto;
`;
