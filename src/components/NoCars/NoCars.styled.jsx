import styled from '@emotion/styled';
import { theme } from 'styles';

export const TitleArea = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: ${theme.fontSizes.medium};
  font-weight: ${theme.fontWeight.medium};
`;
