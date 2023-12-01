import styled from '@emotion/styled';
import { theme } from 'styles';

export const Item = styled.li`
  width: 100%;
  height: auto;
`;

export const Image = styled.img`
  width: 100%;
  height: ${theme.spacing(67)};
  border-radius: ${theme.spacing(3.5)};
  display: flex;
  margin-bottom: ${theme.spacing(3.5)};
`;

export const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: ${theme.fontSizes.medium};
  font-weight: ${theme.fontWeight.medium};
`;

export const Price = styled.p`
  font-size: ${theme.fontSizes.medium};
  font-weight: ${theme.fontWeight.medium};
`;

export const Characteristics = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(7)};
`;

export const CharacteristicsItem = styled.span`
  width: auto;
  padding-right: ${theme.spacing(1.5)};
  margin-right: ${theme.spacing(1.5)};
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.transparencyGrey50};
  border-right: thin solid ${theme.colors.transparencyGrey10};

  :last-child {
    border-right: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: ${theme.spacing(11)};
`;
