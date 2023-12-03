import styled from '@emotion/styled';
import { theme } from 'styles';

export const CatalogPage = styled.section`
  padding-top: ${theme.spacing(12.5)};
  padding-bottom: ${theme.spacing(25)};
`;

export const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  align-items: center;
  font-size: ${theme.fontSizes.medium};
  font-weight: ${theme.fontWeight.medium};
  color: ${theme.colors.blue};
  background-color: inherit;
  transition: background-color color 200ms linear;

  &:hover,
  :focus {
    background-color: inherit;
    color: ${theme.colors.activeBlue};
  }
`;
