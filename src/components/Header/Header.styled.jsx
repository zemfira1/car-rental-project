import styled from '@emotion/styled';
import { theme } from 'styles';
import { NavLink } from 'react-router-dom';

export const HeaderArea = styled.header`
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid;
  border-bottom-color: ${theme.colors.transparencyGrey20};
`;

export const NavigationList = styled.nav`
  display: flex;
  justify-content: flex-start;
  gap: 30px;
`;

export const NavigationItem = styled(NavLink)`
  font-size: ${theme.fontSizes.large};
  font-weight: ${theme.fontWeight.regular};
  color: inherit;
  transition: color 200ms linear;

  &.active {
    color: ${theme.colors.activeBlue};
  }
`;
