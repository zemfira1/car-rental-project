import styled from '@emotion/styled';
import { theme } from 'styles';

export const AllCarsList = styled.ul`
  display: grid;
  max-width: calc(100vw - 87px);
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
  column-gap: ${theme.spacing(7)};
  row-gap: ${theme.spacing(12.5)};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
`;
