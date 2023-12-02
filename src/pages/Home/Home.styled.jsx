import styled from '@emotion/styled';
import { theme } from 'styles/theme';
import key from '../../assets/images/vehicle-keys.jpg';

export const HomePage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${key});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TitleArea = styled.div`
  display: flex;
  justify-content: center;
`;
export const Title = styled.h1`
  padding-top: ${theme.spacing(14)};
  font-size: ${theme.spacing(12)};
`;
