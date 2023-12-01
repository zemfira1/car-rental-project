import styled from '@emotion/styled';
import { theme } from 'styles';

export const ModalInfoArea = styled.section`
  position: relative;
  width: 461px;
  height: auto;
  border-radius: 24px;
  background-color: ${theme.colors.white};
  padding: 40px;
`;

export const ClouseButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  width: 24px;
  height: 24px;
  background-color: inherit;
  border: none;
  transition: background-color 200ms linear;

  &:hover,
  :focus {
    background-color: inherit;
  }
`;

export const SvgClouse = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${theme.colors.black};
  transition: stroke 200ms linear;

  &:hover,
  :focus {
    stroke: ${theme.colors.blue};
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: ${theme.spacing(62)};
  border-radius: ${theme.spacing(3.5)};
  display: flex;
  margin-bottom: ${theme.spacing(3.5)};
`;

export const Title = styled.h2`
  font-size: ${theme.fontSizes.medium};
  font-weight: ${theme.fontWeight.medium};
  margin-bottom: ${theme.spacing(2)};
`;

export const Model = styled.span`
  color: ${theme.colors.blue};
`;

export const CharacteristicsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(3.5)};
`;

export const Characteristics = styled.div`
  width: 100%;
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

export const Description = styled.p``;

export const SubTitle = styled.h3`
  font-size: ${theme.fontSizes.regular};
  font-weight: ${theme.fontWeight.medium};
  margin-bottom: ${theme.spacing(2)};
  margin-top: ${theme.spacing(6)};
`;

export const RentalConditionsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(6)};
`;

export const RentalConditionsRow = styled.div`
  display: flex;
  gap: ${theme.spacing(3)};
`;

export const RentalConditionsItem = styled.p`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.lightBlack};
  padding: 7px 14px;
  border-radius: ${theme.spacing(9)};
  border: none;
  background-color: ${theme.colors.darkWhite};
`;

export const Accent = styled.span`
  color: ${theme.colors.blue};
`;

export const Button = styled.button`
  width: ${theme.spacing(42)};
  height: ${theme.spacing(11)};
`;
